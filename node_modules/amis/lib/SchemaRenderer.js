"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaRenderer = void 0;
var tslib_1 = require("tslib");
var difference_1 = tslib_1.__importDefault(require("lodash/difference"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var react_1 = tslib_1.__importDefault(require("react"));
var LazyComponent_1 = tslib_1.__importDefault(require("./components/LazyComponent"));
var factory_1 = require("./factory");
var Root_1 = require("./Root");
var helper_1 = require("./utils/helper");
var defaultOmitList = [
    'type',
    'name',
    '$ref',
    'className',
    'data',
    'children',
    'ref',
    'visible',
    'visibleOn',
    'hidden',
    'hiddenOn',
    'disabled',
    'disabledOn',
    'component',
    'detectField',
    'required',
    'requiredOn',
    'syncSuperStore'
];
var SchemaRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaRenderer, _super);
    function SchemaRenderer(props) {
        var _this = _super.call(this, props) || this;
        _this.refFn = _this.refFn.bind(_this);
        _this.renderChild = _this.renderChild.bind(_this);
        _this.reRender = _this.reRender.bind(_this);
        return _this;
    }
    SchemaRenderer.prototype.componentWillMount = function () {
        this.resolveRenderer(this.props);
    };
    SchemaRenderer.prototype.componentWillReceiveProps = function (nextProps) {
        var props = this.props;
        if (props.schema &&
            nextProps.schema &&
            (props.schema.type !== nextProps.schema.type ||
                props.schema.$$id !== nextProps.schema.$$id)) {
            this.resolveRenderer(nextProps);
        }
    };
    // 限制：只有 schema 除外的 props 变化，或者 schema 里面的某个成员值发生变化才更新。
    SchemaRenderer.prototype.shouldComponentUpdate = function (nextProps) {
        var props = this.props;
        var list = difference_1.default(Object.keys(nextProps), [
            'schema',
            'scope'
        ]);
        if (difference_1.default(Object.keys(props), ['schema', 'scope']).length !==
            list.length ||
            helper_1.anyChanged(list, this.props, nextProps)) {
            return true;
        }
        else {
            var list_1 = Object.keys(nextProps.schema);
            if (Object.keys(props.schema).length !== list_1.length ||
                helper_1.anyChanged(list_1, props.schema, nextProps.schema)) {
                return true;
            }
        }
        return false;
    };
    SchemaRenderer.prototype.resolveRenderer = function (props, skipResolve) {
        if (skipResolve === void 0) { skipResolve = false; }
        var schema = props.schema;
        var path = props.$path;
        if (schema && schema.$ref) {
            schema = tslib_1.__assign(tslib_1.__assign({}, props.resolveDefinitions(schema.$ref)), schema);
            path = path.replace(/(?!.*\/).*/, schema.type);
        }
        if (!skipResolve) {
            var rendererResolver = props.env.rendererResolver || factory_1.resolveRenderer;
            this.renderer = rendererResolver(path, schema, props);
        }
        return { path: path, schema: schema };
    };
    SchemaRenderer.prototype.getWrappedInstance = function () {
        return this.ref;
    };
    SchemaRenderer.prototype.refFn = function (ref) {
        this.ref = ref;
    };
    SchemaRenderer.prototype.renderChild = function (region, node, subProps) {
        if (subProps === void 0) { subProps = {}; }
        var _a = this.props, schema = _a.schema, $path = _a.$path, env = _a.env, rest = tslib_1.__rest(_a, ["schema", "$path", "env"]);
        if (schema && schema.$ref) {
            var result = this.resolveRenderer(this.props, true);
            schema = result.schema;
            $path = result.path;
        }
        var omitList = defaultOmitList.concat();
        if (this.renderer) {
            var Component = this.renderer.component;
            Component.propsList &&
                omitList.push.apply(omitList, Component.propsList);
        }
        return Root_1.renderChild("" + $path + (region ? "/" + region : ''), node || '', tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, omit_1.default(rest, omitList)), subProps), { data: subProps.data || rest.data, env: env }));
    };
    SchemaRenderer.prototype.reRender = function () {
        this.resolveRenderer(this.props);
        this.forceUpdate();
    };
    SchemaRenderer.prototype.render = function () {
        var _this = this;
        var _a = this.props, $path = _a.$path, schema = _a.schema, rest = tslib_1.__rest(_a, ["$path", "schema"]);
        if (schema === null) {
            return null;
        }
        if (schema.$ref) {
            var result = this.resolveRenderer(this.props, true);
            schema = result.schema;
            $path = result.path;
        }
        var theme = this.props.env.theme;
        if (Array.isArray(schema)) {
            return Root_1.renderChildren($path, schema, rest);
        }
        else if (schema.children) {
            return react_1.default.isValidElement(schema.children)
                ? schema.children
                : schema.children(tslib_1.__assign(tslib_1.__assign({}, rest), { $path: $path, render: this.renderChild, forwardedRef: this.refFn }));
        }
        else if (typeof schema.component === 'function') {
            var isSFC = !(schema.component.prototype instanceof react_1.default.Component);
            return react_1.default.createElement(schema.component, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, rest), schema), { $path: $path, ref: isSFC ? undefined : this.refFn, forwardedRef: isSFC ? this.refFn : undefined, render: this.renderChild }));
        }
        else if (Object.keys(schema).length === 0) {
            return null;
        }
        else if (!this.renderer) {
            return (react_1.default.createElement(LazyComponent_1.default, tslib_1.__assign({}, rest, { getComponent: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var result;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, rest.env.loadRenderer(schema, $path, this.reRender)];
                            case 1:
                                result = _a.sent();
                                if (result && typeof result === 'function') {
                                    return [2 /*return*/, result];
                                }
                                else if (result && react_1.default.isValidElement(result)) {
                                    return [2 /*return*/, function () { return result; }];
                                }
                                this.reRender();
                                return [2 /*return*/, function () { return factory_1.loadRenderer(schema, $path); }];
                        }
                    });
                }); }, "$path": $path, retry: this.reRender })));
        }
        var renderer = this.renderer;
        schema = factory_1.filterSchema(schema, renderer, rest);
        var defaultData = schema.data, restSchema = tslib_1.__rest(schema, ["data"]);
        var Component = renderer.component;
        return (react_1.default.createElement(Component, tslib_1.__assign({}, theme.getRendererConfig(renderer.name), restSchema, helper_1.chainEvents(rest, restSchema), { defaultData: defaultData, "$path": $path, ref: this.refFn, render: this.renderChild })));
    };
    SchemaRenderer.displayName = 'Renderer';
    return SchemaRenderer;
}(react_1.default.Component));
exports.SchemaRenderer = SchemaRenderer;
//# sourceMappingURL=./SchemaRenderer.js.map
