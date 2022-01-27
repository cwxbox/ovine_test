"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RendererEnv = exports.getRendererByName = exports.getRenderers = exports.resolveRenderer = exports.updateEnv = exports.clearStoresCache = exports.render = exports.loadRenderer = exports.unRegisterRenderer = exports.registerRenderer = exports.Renderer = exports.filterSchema = exports.addSchemaFilter = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var qs_1 = tslib_1.__importDefault(require("qs"));
var index_1 = require("./store/index");
var mobx_state_tree_1 = require("mobx-state-tree");
var api_1 = require("./utils/api");
var normalizeLink_1 = require("./utils/normalizeLink");
var helper_1 = require("./utils/helper");
var mobx_react_1 = require("mobx-react");
var Scoped_1 = tslib_1.__importDefault(require("./Scoped"));
var theme_1 = require("./theme");
var find_1 = tslib_1.__importDefault(require("lodash/find"));
var Alert2_1 = tslib_1.__importDefault(require("./components/Alert2"));
var Toast_1 = require("./components/Toast");
var Alert_1 = require("./components/Alert");
var locale_1 = require("./locale");
var Root_1 = tslib_1.__importDefault(require("./Root"));
var WithStore_1 = require("./WithStore");
var env_1 = require("./env");
Object.defineProperty(exports, "RendererEnv", { enumerable: true, get: function () { return env_1.RendererEnv; } });
var renderers = [];
var rendererNames = [];
var schemaFilters = [];
var anonymousIndex = 1;
function addSchemaFilter(fn) {
    schemaFilters.push(fn);
}
exports.addSchemaFilter = addSchemaFilter;
function filterSchema(schema, render, props) {
    return schemaFilters.reduce(function (schema, filter) { return filter(schema, render, props); }, schema);
}
exports.filterSchema = filterSchema;
function Renderer(config) {
    return function (component) {
        var renderer = registerRenderer(tslib_1.__assign(tslib_1.__assign({}, config), { component: component }));
        return renderer.component;
    };
}
exports.Renderer = Renderer;
function registerRenderer(config) {
    if (!config.test) {
        throw new TypeError('config.test is required');
    }
    else if (!config.component) {
        throw new TypeError('config.component is required');
    }
    config.weight = config.weight || 0;
    config.Renderer = config.component;
    config.name = config.name || "anonymous-" + anonymousIndex++;
    if (~rendererNames.indexOf(config.name)) {
        throw new Error("The renderer with name \"" + config.name + "\" has already exists, please try another name!");
    }
    if (config.storeType && config.component) {
        config.component = WithStore_1.HocStoreFactory({
            storeType: config.storeType,
            extendsData: config.storeExtendsData,
            shouldSyncSuperStore: config.shouldSyncSuperStore
        })(mobx_react_1.observer(config.component));
    }
    if (config.isolateScope) {
        config.component = Scoped_1.default(config.component);
    }
    var idx = helper_1.findIndex(renderers, function (item) { return config.weight < item.weight; });
    ~idx ? renderers.splice(idx, 0, config) : renderers.push(config);
    rendererNames.push(config.name);
    return config;
}
exports.registerRenderer = registerRenderer;
function unRegisterRenderer(config) {
    var idx = typeof config === 'string'
        ? helper_1.findIndex(renderers, function (item) { return item.name === config; })
        : renderers.indexOf(config);
    ~idx && renderers.splice(idx, 1);
    var idx2 = typeof config === 'string'
        ? helper_1.findIndex(rendererNames, function (item) { return item === config; })
        : rendererNames.indexOf(config.name || '');
    ~idx2 && rendererNames.splice(idx2, 1);
    // 清空渲染器定位缓存
    cache = {};
}
exports.unRegisterRenderer = unRegisterRenderer;
function loadRenderer(schema, path) {
    return (react_1.default.createElement(Alert2_1.default, { level: "danger" },
        react_1.default.createElement("p", null, "Error: \u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u6E32\u67D3\u5668"),
        react_1.default.createElement("p", null,
            "Path: ",
            path),
        react_1.default.createElement("pre", null,
            react_1.default.createElement("code", null, JSON.stringify(schema, null, 2)))));
}
exports.loadRenderer = loadRenderer;
var defaultOptions = {
    session: 'global',
    affixOffsetTop: 50,
    affixOffsetBottom: 0,
    richTextToken: '',
    loadRenderer: loadRenderer,
    fetcher: function () {
        return Promise.reject('fetcher is required');
    },
    // 使用 WebSocket 来实时获取数据
    wsFetcher: function (ws, onMessage, onError) {
        if (ws) {
            var socket = new WebSocket(ws);
            socket.onmessage = function (event) {
                if (event.data) {
                    onMessage(JSON.parse(event.data));
                }
            };
            socket.onerror = onError;
            return {
                close: socket.close
            };
        }
        else {
            return {
                close: function () { }
            };
        }
    },
    isCancel: function () {
        console.error('Please implements this. see https://baidu.gitee.io/amis/docs/start/getting-started#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97');
        return false;
    },
    updateLocation: function () {
        console.error('Please implements this. see https://baidu.gitee.io/amis/docs/start/getting-started#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97');
    },
    alert: Alert_1.alert,
    confirm: Alert_1.confirm,
    notify: function (type, msg, conf) {
        return Toast_1.toast[type]
            ? Toast_1.toast[type](msg, type === 'error' ? 'Error' : 'Info', conf)
            : console.warn('[Notify]', type, msg);
    },
    jumpTo: function (to, action) {
        if (to === 'goBack') {
            return window.history.back();
        }
        to = normalizeLink_1.normalizeLink(to);
        if (action && action.actionType === 'url') {
            action.blank === false ? (window.location.href = to) : window.open(to);
            return;
        }
        if (/^https?:\/\//.test(to)) {
            window.location.replace(to);
        }
        else {
            location.href = to;
        }
    },
    isCurrentUrl: function (to) {
        if (!to) {
            return false;
        }
        var link = normalizeLink_1.normalizeLink(to);
        var location = window.location;
        var pathname = link;
        var search = '';
        var idx = link.indexOf('?');
        if (~idx) {
            pathname = link.substring(0, idx);
            search = link.substring(idx);
        }
        if (search) {
            if (pathname !== location.pathname || !location.search) {
                return false;
            }
            var query_1 = qs_1.default.parse(search.substring(1));
            var currentQuery_1 = qs_1.default.parse(location.search.substring(1));
            return Object.keys(query_1).every(function (key) { return query_1[key] === currentQuery_1[key]; });
        }
        else if (pathname === location.pathname) {
            return true;
        }
        return false;
    },
    copy: function (contents) {
        console.error('copy contents', contents);
    },
    rendererResolver: resolveRenderer
};
var stores = {};
function render(schema, props, options, pathPrefix) {
    if (props === void 0) { props = {}; }
    if (options === void 0) { options = {}; }
    if (pathPrefix === void 0) { pathPrefix = ''; }
    var locale = props.locale || locale_1.getDefaultLocale();
    // 兼容 locale 的不同写法
    locale = locale.replace('_', '-');
    locale = locale === 'en' ? 'en-US' : locale;
    locale = locale === 'zh' ? 'zh-CN' : locale;
    locale = locale === 'cn' ? 'zh-CN' : locale;
    var translate = props.translate || locale_1.makeTranslator(locale);
    var store = stores[options.session || 'global'];
    if (!store) {
        options = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, defaultOptions), options), { fetcher: options.fetcher
                ? api_1.wrapFetcher(options.fetcher)
                : defaultOptions.fetcher, confirm: helper_1.promisify(options.confirm || defaultOptions.confirm || window.confirm), locale: locale,
            translate: translate });
        store = index_1.RendererStore.create({}, options);
        stores[options.session || 'global'] = store;
    }
    window.amisStore = store; // 为了方便 debug.
    var env = mobx_state_tree_1.getEnv(store);
    var theme = props.theme || options.theme || 'default';
    env.theme = theme_1.getTheme(theme);
    if (props.locale !== undefined) {
        env.translate = translate;
        env.locale = locale;
    }
    return (react_1.default.createElement(env_1.EnvContext.Provider, { value: env },
        react_1.default.createElement(Root_1.default, tslib_1.__assign({}, props, { schema: schema, pathPrefix: pathPrefix, rootStore: store, env: env, theme: theme, locale: locale, translate: translate }))));
}
exports.render = render;
// 默认 env 会被缓存，所以新传入的 env 不会替换旧的。
// 除非先删了旧的，新的才会生效。
function clearStoresCache(sessions) {
    if (sessions === void 0) { sessions = Object.keys(stores); }
    if (!Array.isArray(sessions)) {
        sessions = [sessions];
    }
    sessions.forEach(function (key) {
        var store = stores[key];
        // @ts-ignore
        delete stores[key];
        store && mobx_state_tree_1.destroy(store);
    });
}
exports.clearStoresCache = clearStoresCache;
// 当然也可以直接这样更新。
// 主要是有时候第一次创建的时候并没有准备多少接口，
// 可以后续补充点，比如 amis 自己实现的，prompt 里面的表单。
function updateEnv(options, session) {
    if (session === void 0) { session = 'global'; }
    options = tslib_1.__assign({}, options);
    if (options.fetcher) {
        options.fetcher = api_1.wrapFetcher(options.fetcher);
    }
    if (options.confirm) {
        options.confirm = helper_1.promisify(options.confirm);
    }
    var store = stores[options.session || session];
    if (!store) {
        store = index_1.RendererStore.create({}, options);
        stores[options.session || session] = store;
    }
    else {
        var env = mobx_state_tree_1.getEnv(store);
        Object.assign(env, options);
    }
}
exports.updateEnv = updateEnv;
var cache = {};
function resolveRenderer(path, schema) {
    if (cache[path]) {
        return cache[path];
    }
    else if (path && path.length > 1024) {
        throw new Error('Path太长是不是死循环了？');
    }
    var renderer = null;
    renderers.some(function (item) {
        var matched = false;
        // 不应该搞得这么复杂的，让每个渲染器唯一 id，自己不晕别人用起来也不晕。
        if (typeof item.test === 'function') {
            matched = item.test(path, schema, resolveRenderer);
        }
        else if (item.test instanceof RegExp) {
            matched = item.test.test(path);
        }
        if (matched) {
            renderer = item;
        }
        return matched;
    });
    // 只能缓存纯正则表达式的后者方法中没有用到第二个参数的，
    // 因为自定义 test 函数的有可能依赖 schema 的结果
    if (renderer !== null &&
        (renderer.test instanceof RegExp ||
            (typeof renderer.test === 'function' &&
                renderer.test.length < 2))) {
        cache[path] = renderer;
    }
    return renderer;
}
exports.resolveRenderer = resolveRenderer;
function getRenderers() {
    return renderers.concat();
}
exports.getRenderers = getRenderers;
function getRendererByName(name) {
    return find_1.default(renderers, function (item) { return item.name === name; });
}
exports.getRendererByName = getRendererByName;
Alert_1.setRenderSchemaFn(function (controls, value, callback, scopeRef, theme) {
    return render({
        name: 'form',
        type: 'form',
        wrapWithPanel: false,
        mode: 'horizontal',
        controls: controls,
        messages: {
            validateFailed: ''
        }
    }, {
        data: value,
        onFinished: callback,
        scopeRef: scopeRef,
        theme: theme
    }, {
        session: 'prompt'
    });
});
//# sourceMappingURL=./factory.js.map
