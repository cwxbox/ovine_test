"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartRenderer = exports.Chart = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var factory_1 = require("../factory");
var service_1 = require("../store/service");
var tpl_1 = require("../utils/tpl");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var LazyComponent_1 = tslib_1.__importDefault(require("../components/LazyComponent"));
var resize_sensor_1 = require("../utils/resize-sensor");
var tpl_builtin_1 = require("../utils/tpl-builtin");
var api_1 = require("../utils/api");
var Scoped_1 = require("../Scoped");
var helper_1 = require("../utils/helper");
var Spinner_1 = tslib_1.__importDefault(require("../components/Spinner"));
var mobx_state_tree_1 = require("mobx-state-tree");
var EVAL_CACHE = {};
/**
 * ECharts 中有些配置项可以写函数，但 JSON 中无法支持，为了实现这个功能，需要将看起来像函数的字符串转成函数类型
 * 目前 ECharts 中可能有函数的配置项有如下：interval、formatter、color、min、max、labelFormatter、pageFormatter、optionToContent、contentToOption、animationDelay、animationDurationUpdate、animationDelayUpdate、animationDuration、position、sort
 * 其中用得最多的是 formatter、sort，所以目前先只支持它们
 * @param config ECharts 配置
 */
function recoverFunctionType(config) {
    ['formatter', 'sort', 'renderItem'].forEach(function (key) {
        var objects = helper_1.findObjectsWithKey(config, key);
        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
            var object = objects_1[_i];
            var code = object[key];
            if (typeof code === 'string' && code.trim().startsWith('function')) {
                try {
                    if (!(code in EVAL_CACHE)) {
                        EVAL_CACHE[code] = eval('(' + code + ')');
                    }
                    object[key] = EVAL_CACHE[code];
                }
                catch (e) {
                    console.warn(code, e);
                }
            }
        }
    });
}
var Chart = /** @class */ (function (_super) {
    tslib_1.__extends(Chart, _super);
    function Chart(props) {
        var _this = _super.call(this, props) || this;
        _this.refFn = _this.refFn.bind(_this);
        _this.reload = _this.reload.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Chart.prototype.componentWillMount = function () {
        var _a = this.props, config = _a.config, api = _a.api, data = _a.data, initFetch = _a.initFetch, source = _a.source;
        this.mounted = true;
        if (source && tpl_builtin_1.isPureVariable(source)) {
            var ret = tpl_builtin_1.resolveVariableAndFilter(source, data, '| raw');
            ret && this.renderChart(ret);
        }
        else if (api && initFetch !== false) {
            this.reload();
        }
        config && this.renderChart(config);
    };
    Chart.prototype.componentDidUpdate = function (prevProps) {
        var props = this.props;
        if (api_1.isApiOutdated(prevProps.api, props.api, prevProps.data, props.data)) {
            this.reload();
        }
        else if (props.source && tpl_builtin_1.isPureVariable(props.source)) {
            var prevRet = prevProps.source
                ? tpl_builtin_1.resolveVariableAndFilter(prevProps.source, prevProps.data, '| raw')
                : null;
            var ret = tpl_builtin_1.resolveVariableAndFilter(props.source, props.data, '| raw');
            if (prevRet !== ret) {
                this.renderChart(ret || {});
            }
        }
        else if (props.config !== prevProps.config) {
            this.renderChart(props.config || {});
        }
        else if (props.config &&
            props.trackExpression &&
            tpl_1.filter(props.trackExpression, props.data) !==
                tpl_1.filter(prevProps.trackExpression, prevProps.data)) {
            this.renderChart(props.config || {});
        }
    };
    Chart.prototype.componentWillUnmount = function () {
        this.mounted = false;
        clearTimeout(this.timer);
    };
    Chart.prototype.handleClick = function (ctx) {
        var _a = this.props, onAction = _a.onAction, clickAction = _a.clickAction, data = _a.data;
        clickAction &&
            onAction &&
            onAction(null, clickAction, helper_1.createObject(data, ctx));
    };
    Chart.prototype.refFn = function (ref) {
        var _this = this;
        var chartRef = this.props.chartRef;
        var _a = this.props, chartTheme = _a.chartTheme, onChartWillMount = _a.onChartWillMount, onChartUnMount = _a.onChartUnMount, env = _a.env;
        var onChartMount = this.props.onChartMount;
        if (ref) {
            Promise.all([
                Promise.resolve().then(function () { return new Promise(function(resolve){require(['echarts'], function(ret) {resolve(tslib_1.__importStar(ret));})}); }),
                Promise.resolve().then(function () { return new Promise(function(resolve){require(['echarts-stat'], function(ret) {resolve(tslib_1.__importStar(ret));})}); }),
                Promise.resolve().then(function () { return new Promise(function(resolve){require(['echarts/extension/dataTool'], function(ret) {resolve(tslib_1.__importStar(ret));})}); }),
                Promise.resolve().then(function () { return new Promise(function(resolve){require(['echarts/extension/bmap/bmap'], function(ret) {resolve(tslib_1.__importStar(ret));})}); })
            ]).then(function (_a) {
                var echarts = _a[0], ecStat = _a[1];
                return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var theme;
                    var _this = this;
                    return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                window.echarts = echarts;
                                window.ecStat = ecStat;
                                theme = 'default';
                                if (chartTheme) {
                                    echarts.registerTheme('custom', chartTheme);
                                    theme = 'custom';
                                }
                                if (!onChartWillMount) return [3 /*break*/, 2];
                                return [4 /*yield*/, onChartWillMount(echarts)];
                            case 1:
                                _b.sent();
                                _b.label = 2;
                            case 2:
                                echarts.registerTransform(ecStat.transform.regression);
                                echarts.registerTransform(ecStat.transform.histogram);
                                echarts.registerTransform(ecStat.transform.clustering);
                                if (!env.loadChartExtends) return [3 /*break*/, 4];
                                return [4 /*yield*/, env.loadChartExtends()];
                            case 3:
                                _b.sent();
                                _b.label = 4;
                            case 4:
                                this.echarts = echarts.init(ref, theme);
                                if (typeof onChartMount === 'string') {
                                    onChartMount = new Function('chart', 'echarts');
                                }
                                onChartMount === null || onChartMount === void 0 ? void 0 : onChartMount(this.echarts, echarts);
                                this.echarts.on('click', this.handleClick);
                                this.unSensor = resize_sensor_1.resizeSensor(ref, function () {
                                    var _a;
                                    var width = ref.offsetWidth;
                                    var height = ref.offsetHeight;
                                    (_a = _this.echarts) === null || _a === void 0 ? void 0 : _a.resize({
                                        width: width,
                                        height: height
                                    });
                                });
                                chartRef && chartRef(this.echarts);
                                this.renderChart();
                                return [2 /*return*/];
                        }
                    });
                });
            });
        }
        else {
            chartRef && chartRef(null);
            this.unSensor && this.unSensor();
            if (this.echarts) {
                onChartUnMount === null || onChartUnMount === void 0 ? void 0 : onChartUnMount(this.echarts, window.echarts);
                this.echarts.dispose();
                delete this.echarts;
            }
        }
        this.ref = ref;
    };
    Chart.prototype.reload = function (subpath, query) {
        var _this = this;
        var _a, _b;
        var _c = this.props, api = _c.api, env = _c.env, store = _c.store, interval = _c.interval;
        if (query) {
            return this.receive(query);
        }
        else if (!env || !env.fetcher || !api_1.isEffectiveApi(api, store.data)) {
            return;
        }
        clearTimeout(this.timer);
        if (this.reloadCancel) {
            this.reloadCancel();
            delete this.reloadCancel;
            (_a = this.echarts) === null || _a === void 0 ? void 0 : _a.hideLoading();
        }
        (_b = this.echarts) === null || _b === void 0 ? void 0 : _b.showLoading();
        store.markFetching(true);
        env
            .fetcher(api, store.data, {
            cancelExecutor: function (executor) { return (_this.reloadCancel = executor); }
        })
            .then(function (result) {
            var _a;
            mobx_state_tree_1.isAlive(store) && store.markFetching(false);
            if (!result.ok) {
                return env.notify('error', result.msg || '加载失败，请重试！', result.msgTimeout !== undefined
                    ? {
                        closeButton: true,
                        timeout: result.msgTimeout
                    }
                    : undefined);
            }
            delete _this.reloadCancel;
            var data = result.data || {};
            // 说明返回的是数据接口。
            if (!data.series && _this.props.config) {
                var ctx = helper_1.createObject(_this.props.data, data);
                _this.renderChart(_this.props.config, ctx);
            }
            else {
                _this.renderChart(result.data || {});
            }
            (_a = _this.echarts) === null || _a === void 0 ? void 0 : _a.hideLoading();
            interval &&
                _this.mounted &&
                (_this.timer = setTimeout(_this.reload, Math.max(interval, 1000)));
        })
            .catch(function (reason) {
            var _a;
            if (env.isCancel(reason)) {
                return;
            }
            mobx_state_tree_1.isAlive(store) && store.markFetching(false);
            env.notify('error', reason);
            (_a = _this.echarts) === null || _a === void 0 ? void 0 : _a.hideLoading();
        });
    };
    Chart.prototype.receive = function (data) {
        var store = this.props.store;
        store.updateData(data);
        this.reload();
    };
    Chart.prototype.renderChart = function (config, data) {
        var _a, _b, _c;
        config && (this.pending = config);
        data && (this.pendingCtx = data);
        if (!this.echarts) {
            return;
        }
        var store = this.props.store;
        var onDataFilter = this.props.onDataFilter;
        var dataFilter = this.props.dataFilter;
        if (!onDataFilter && typeof dataFilter === 'string') {
            onDataFilter = new Function('config', 'echarts', dataFilter);
        }
        config = config || this.pending;
        data = data || this.pendingCtx || this.props.data;
        if (typeof config === 'string') {
            config = new Function('return ' + config)();
        }
        try {
            onDataFilter &&
                (config = onDataFilter(config, window.echarts) || config);
        }
        catch (e) {
            console.warn(e);
        }
        if (config) {
            try {
                if (!this.props.disableDataMapping) {
                    config = tpl_builtin_1.dataMapping(config, data, function (key, value) {
                        return typeof value === 'function' ||
                            (typeof value === 'string' && value.startsWith('function'));
                    });
                }
                recoverFunctionType(config);
                if (mobx_state_tree_1.isAlive(store) && store.loading) {
                    (_a = this.echarts) === null || _a === void 0 ? void 0 : _a.showLoading();
                }
                else {
                    (_b = this.echarts) === null || _b === void 0 ? void 0 : _b.hideLoading();
                }
                (_c = this.echarts) === null || _c === void 0 ? void 0 : _c.setOption(config, this.props.replaceChartOption);
            }
            catch (e) {
                console.warn(e);
            }
        }
    };
    Chart.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, width = _a.width, height = _a.height, ns = _a.classPrefix, unMountOnHidden = _a.unMountOnHidden;
        var style = this.props.style || {};
        width && (style.width = width);
        height && (style.height = height);
        return (react_1.default.createElement(LazyComponent_1.default, { unMountOnHidden: unMountOnHidden, placeholder: react_1.default.createElement("div", { className: classnames_1.default(ns + "Chart", className), style: style },
                react_1.default.createElement("div", { className: ns + "Chart-placeholder" },
                    react_1.default.createElement(Spinner_1.default, { show: true, icon: "reload", spinnerClassName: classnames_1.default('Chart-spinner') }))), component: function () { return (react_1.default.createElement("div", { className: classnames_1.default(ns + "Chart", className), style: style, ref: _this.refFn })); } }));
    };
    Chart.defaultProps = {
        replaceChartOption: false,
        unMountOnHidden: false
    };
    Chart.propsList = [];
    return Chart;
}(react_1.default.Component));
exports.Chart = Chart;
var ChartRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(ChartRenderer, _super);
    function ChartRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartRenderer.prototype.componentWillMount = function () {
        _super.prototype.componentWillMount.call(this);
        var scoped = this.context;
        scoped.registerComponent(this);
    };
    ChartRenderer.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        var scoped = this.context;
        scoped.unRegisterComponent(this);
    };
    ChartRenderer.contextType = Scoped_1.ScopedContext;
    ChartRenderer = tslib_1.__decorate([
        factory_1.Renderer({
            test: /(^|\/)chart$/,
            storeType: service_1.ServiceStore.name,
            name: 'chart'
        })
    ], ChartRenderer);
    return ChartRenderer;
}(Chart));
exports.ChartRenderer = ChartRenderer;
//# sourceMappingURL=./renderers/Chart.js.map
