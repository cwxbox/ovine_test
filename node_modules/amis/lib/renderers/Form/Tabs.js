"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsRenderer = void 0;
var tslib_1 = require("tslib");
var find_1 = tslib_1.__importDefault(require("lodash/find"));
var react_1 = tslib_1.__importDefault(require("react"));
var factory_1 = require("../../factory");
var Tabs_1 = tslib_1.__importDefault(require("../Tabs"));
var TabsRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(TabsRenderer, _super);
    function TabsRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderTab = function (tab, props, key) {
            var _a = _this.props, renderFormItems = _a.renderFormItems, formMode = _a.formMode, formHorizontal = _a.formHorizontal, $path = _a.$path, render = _a.render, cx = _a.classnames;
            if (renderFormItems &&
                !tab.type &&
                (tab.controls || tab.fieldSet || tab.tabs)) {
                return (react_1.default.createElement("div", { className: cx("Form--" + (tab.mode || formMode || 'normal')) }, renderFormItems(tab, $path.replace(/^.*form\//, '') + "/" + key, {
                    mode: tab.mode || formMode,
                    horizontal: tab.horizontal || formHorizontal
                })));
            }
            return render("tab/" + key, tab.body || tab.tab || tab);
        };
        return _this;
    }
    TabsRenderer.prototype.resolveTabByKey = function (key) {
        var tabs = this.props.tabs;
        if (!Array.isArray(tabs)) {
            return;
        }
        return find_1.default(tabs, function (tab, index) {
            return tab.hash ? tab.hash === key : index === key;
        });
    };
    TabsRenderer.prototype.resolveKeyByValue = function (value) {
        var tabs = this.props.tabs;
        if (!Array.isArray(tabs)) {
            return;
        }
        var tab = find_1.default(tabs, function (tab) { var _a; return ((_a = tab.value) !== null && _a !== void 0 ? _a : tab.title) === value; });
        return tab && tab.hash ? tab.hash : tabs.indexOf(tab);
    };
    TabsRenderer.prototype.componentDidMount = function () {
        var _a, _b;
        _super.prototype.componentDidMount.call(this);
        var _c = this.props, name = _c.name, value = _c.value, onChange = _c.onChange, source = _c.source, tabs = _c.tabs;
        // 如果没有配置 name ，说明不需要同步表单值
        if (!name ||
            typeof onChange !== 'function' ||
            // 如果关联某个变量数据，则不启用
            source) {
            return;
        }
        //  如果有值，切到对应的 tab
        if (value && Array.isArray(tabs)) {
            var key = this.resolveKeyByValue(value);
            key !== undefined && this.handleSelect(key);
        }
        else {
            var tab = this.resolveTabByKey(this.activeKey);
            if (tab && value !== ((_a = tab.value) !== null && _a !== void 0 ? _a : tab.title)) {
                onChange((_b = tab.value) !== null && _b !== void 0 ? _b : tab.title);
            }
        }
    };
    TabsRenderer.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b;
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        var _c = this.props, name = _c.name, value = _c.value, onChange = _c.onChange, source = _c.source, tabs = _c.tabs;
        // 如果没有配置 name ，说明不需要同步表单值
        if (!name ||
            typeof onChange !== 'function' ||
            // 如果关联某个变量数据，则不启用
            source) {
            return;
        }
        var key;
        if (value !== prevProps.value &&
            (key = this.resolveKeyByValue(value)) !== undefined &&
            key !== this.activeKey) {
            this.handleSelect(key);
        }
        else if (this.activeKey !== prevState.activeKey) {
            var tab = this.resolveTabByKey(this.activeKey);
            if (tab && value !== ((_a = tab.value) !== null && _a !== void 0 ? _a : tab.title)) {
                onChange((_b = tab.value) !== null && _b !== void 0 ? _b : tab.title);
            }
        }
    };
    TabsRenderer.defaultProps = {
        mountOnEnter: false // form 中的不按需渲染
    };
    TabsRenderer.propsList = ['onChange', 'tabs'];
    TabsRenderer = tslib_1.__decorate([
        factory_1.Renderer({
            test: /(^|\/)form(?:.+)?\/control\/tabs$/i,
            weight: -100,
            name: 'tabs-control'
        })
    ], TabsRenderer);
    return TabsRenderer;
}(Tabs_1.default));
exports.TabsRenderer = TabsRenderer;
//# sourceMappingURL=./renderers/Form/Tabs.js.map
