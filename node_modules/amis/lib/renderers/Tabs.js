"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsRenderer = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var factory_1 = require("../factory");
var find_1 = tslib_1.__importDefault(require("lodash/find"));
var helper_1 = require("../utils/helper");
var findIndex_1 = tslib_1.__importDefault(require("lodash/findIndex"));
var Tabs_1 = require("../components/Tabs");
var tpl_1 = require("../utils/tpl");
var tpl_builtin_1 = require("../utils/tpl-builtin");
var Tabs = /** @class */ (function (_super) {
    tslib_1.__extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        var location = props.location || window.location;
        var tabs = props.tabs;
        var activeKey = 0;
        if (typeof props.activeKey !== 'undefined') {
            activeKey = props.activeKey;
        }
        else if (location && Array.isArray(tabs)) {
            var hash_1 = location.hash.substring(1);
            var tab = find_1.default(tabs, function (tab) { return tab.hash === hash_1; });
            activeKey = tab && tab.hash ? tab.hash : (tabs[0] && tabs[0].hash) || 0;
        }
        _this.state = {
            prevKey: undefined,
            activeKey: (_this.activeKey = activeKey)
        };
        return _this;
    }
    Tabs.prototype.componentDidMount = function () {
        this.autoJumpToNeighbour(this.activeKey);
    };
    Tabs.prototype.componentDidUpdate = function (preProps, prevState) {
        var props = this.props;
        if (props.location && props.location.hash !== preProps.location.hash) {
            var hash_2 = props.location.hash.substring(1);
            if (!hash_2) {
                return;
            }
            var tab = find_1.default(props.tabs, function (tab) { return tab.hash === hash_2; });
            if (tab && tab.hash && tab.hash !== this.state.activeKey) {
                this.setState({
                    activeKey: (this.activeKey = tab.hash),
                    prevKey: this.state.activeKey
                });
            }
        }
        else if (preProps.tabs !== props.tabs) {
            var activeKey_1 = this.state.activeKey;
            var location = props.location;
            var tab = null;
            if (location && Array.isArray(props.tabs)) {
                var hash_3 = location.hash.substring(1);
                tab = find_1.default(props.tabs, function (tab) { return tab.hash === hash_3; });
            }
            if (tab) {
                activeKey_1 = tab.hash;
            }
            else if (!props.tabs ||
                !props.tabs.some(function (item, index) {
                    return item.hash ? item.hash === activeKey_1 : index === activeKey_1;
                })) {
                activeKey_1 = (props.tabs && props.tabs[0] && props.tabs[0].hash) || 0;
            }
            this.setState({
                prevKey: undefined,
                activeKey: (this.activeKey = activeKey_1)
            });
        }
        this.autoJumpToNeighbour(this.activeKey);
    };
    Tabs.prototype.autoJumpToNeighbour = function (key) {
        var _a = this.props, tabs = _a.tabs, data = _a.data;
        if (!Array.isArray(tabs)) {
            return;
        }
        // 当前 tab 可能不可见，所以需要自动切到一个可见的 tab, 向前找，找一圈
        var tabIndex = findIndex_1.default(tabs, function (tab, index) {
            return tab.hash ? tab.hash === key : index === key;
        });
        if (tabs[tabIndex] && !helper_1.isVisible(tabs[tabIndex], this.props.data)) {
            var len = tabs.length;
            var i = tabIndex - 1 + len;
            var tries = len - 1;
            while (tries--) {
                var index = i-- % len;
                if (helper_1.isVisible(tabs[index], data)) {
                    var activeKey = tabs[index].hash || index;
                    this.setState({
                        activeKey: (this.activeKey = activeKey)
                    });
                    break;
                }
            }
        }
    };
    Tabs.prototype.handleSelect = function (key) {
        var env = this.props.env;
        // 是 hash，需要更新到地址栏
        if (typeof key === 'string' && env) {
            env.updateLocation("#" + key);
        }
        else if (typeof this.state.activeKey === 'string' && env) {
            env.updateLocation("#");
        }
        this.setState({
            activeKey: (this.activeKey = key),
            prevKey: this.state.activeKey
        });
    };
    Tabs.prototype.switchTo = function (index) {
        var tabs = this.props.tabs;
        Array.isArray(tabs) &&
            tabs[index] &&
            this.setState({
                activeKey: (this.activeKey = tabs[index].hash || index)
            });
    };
    Tabs.prototype.currentIndex = function () {
        var _this = this;
        var tabs = this.props.tabs;
        return Array.isArray(tabs)
            ? findIndex_1.default(tabs, function (tab, index) {
                return tab.hash
                    ? tab.hash === _this.state.activeKey
                    : index === _this.state.activeKey;
            })
            : -1;
    };
    Tabs.prototype.renderToolbar = function () {
        var _a = this.props, toolbar = _a.toolbar, render = _a.render, cx = _a.classnames, toolbarClassName = _a.toolbarClassName;
        return toolbar ? (react_1.default.createElement("div", { className: cx("Tabs-toolbar", toolbarClassName) }, render('toolbar', toolbar))) : null;
    };
    Tabs.prototype.renderTabs = function () {
        var _this = this;
        var _a = this.props, cx = _a.classnames, ns = _a.classPrefix, contentClassName = _a.contentClassName, tabRender = _a.tabRender, className = _a.className, render = _a.render, data = _a.data, dMode = _a.mode, tabsMode = _a.tabsMode, mountOnEnter = _a.mountOnEnter, unmountOnExit = _a.unmountOnExit, source = _a.source;
        var mode = tabsMode || dMode;
        var arr = tpl_builtin_1.resolveVariable(source, data);
        var tabs = this.props.tabs;
        if (!tabs) {
            return null;
        }
        tabs = Array.isArray(tabs) ? tabs : [tabs];
        var children = [];
        if (Array.isArray(arr)) {
            arr.forEach(function (value, index) {
                var ctx = helper_1.createObject(data, helper_1.isObject(value) ? tslib_1.__assign({ index: index }, value) : { item: value, index: index });
                children.push.apply(children, tabs.map(function (tab, tabIndex) {
                    return helper_1.isVisible(tab, ctx) ? (react_1.default.createElement(Tabs_1.Tab, tslib_1.__assign({}, tab, { title: tpl_1.filter(tab.title, ctx), disabled: helper_1.isDisabled(tab, ctx), key: "" + (index * 1000 + tabIndex), eventKey: index * 1000 + tabIndex, mountOnEnter: mountOnEnter, unmountOnExit: typeof tab.reload === 'boolean'
                            ? tab.reload
                            : typeof tab.unmountOnExit === 'boolean'
                                ? tab.unmountOnExit
                                : unmountOnExit }), render("item/" + index + "/" + tabIndex, tab.tab || tab.body || '', {
                        data: ctx
                    }))) : null;
                }));
            });
        }
        else {
            children = tabs.map(function (tab, index) {
                return helper_1.isVisible(tab, data) ? (react_1.default.createElement(Tabs_1.Tab, tslib_1.__assign({}, tab, { title: tpl_1.filter(tab.title, data), disabled: helper_1.isDisabled(tab, data), key: index, eventKey: tab.hash || index, mountOnEnter: mountOnEnter, unmountOnExit: typeof tab.reload === 'boolean'
                        ? tab.reload
                        : typeof tab.unmountOnExit === 'boolean'
                            ? tab.unmountOnExit
                            : unmountOnExit }), _this.renderTab
                    ? _this.renderTab(tab, _this.props, index)
                    : tabRender
                        ? tabRender(tab, _this.props, index)
                        : render("tab/" + index, tab.tab || tab.body || ''))) : null;
            });
        }
        return (react_1.default.createElement(Tabs_1.Tabs, { classPrefix: ns, classnames: cx, mode: mode, className: className, contentClassName: contentClassName, onSelect: this.handleSelect, activeKey: this.state.activeKey, toolbar: this.renderToolbar() }, children));
    };
    Tabs.prototype.render = function () {
        return this.renderTabs();
    };
    Tabs.defaultProps = {
        className: '',
        mode: '',
        mountOnEnter: true,
        unmountOnExit: false
    };
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], Tabs.prototype, "autoJumpToNeighbour", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], Tabs.prototype, "handleSelect", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], Tabs.prototype, "switchTo", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Number)
    ], Tabs.prototype, "currentIndex", null);
    return Tabs;
}(react_1.default.Component));
exports.default = Tabs;
var TabsRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(TabsRenderer, _super);
    function TabsRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsRenderer = tslib_1.__decorate([
        factory_1.Renderer({
            test: /(^|\/)tabs$/,
            name: 'tabs'
        })
    ], TabsRenderer);
    return TabsRenderer;
}(Tabs));
exports.TabsRenderer = TabsRenderer;
//# sourceMappingURL=./renderers/Tabs.js.map
