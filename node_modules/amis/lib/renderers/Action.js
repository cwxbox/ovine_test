"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetRenderer = exports.SubmitRenderer = exports.ButtonRenderer = exports.ActionRenderer = exports.Action = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var factory_1 = require("../factory");
var tpl_1 = require("../utils/tpl");
var Button_1 = tslib_1.__importDefault(require("../components/Button"));
var pick_1 = tslib_1.__importDefault(require("lodash/pick"));
var ActionProps = [
    'dialog',
    'drawer',
    'url',
    'link',
    'confirmText',
    'tooltip',
    'disabledTip',
    'className',
    'asyncApi',
    'redirect',
    'size',
    'level',
    'primary',
    'feedback',
    'api',
    'blank',
    'tooltipPlacement',
    'to',
    'content',
    'required',
    'type',
    'actionType',
    'label',
    'icon',
    'reload',
    'target',
    'close',
    'messages',
    'mergeData',
    'index',
    'copy',
    'payload',
    'requireSelected'
];
var Remark_1 = require("./Remark");
var theme_1 = require("../theme");
var helper_1 = require("../utils/helper");
var icon_1 = require("../utils/icon");
var allowedType = ['button', 'submit', 'reset'];
var Action = /** @class */ (function (_super) {
    tslib_1.__extends(Action, _super);
    function Action(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            inCountDown: false,
            countDownEnd: 0,
            timeLeft: 0
        };
        _this.localStorageKey = 'amis-countdownend-' + (_this.props.name || '');
        var countDownEnd = parseInt(localStorage.getItem(_this.localStorageKey) || '0');
        if (countDownEnd && _this.props.countDown) {
            if (Date.now() < countDownEnd) {
                _this.state = {
                    inCountDown: true,
                    countDownEnd: countDownEnd,
                    timeLeft: Math.floor((countDownEnd - Date.now()) / 1000)
                };
                _this.handleCountDown();
            }
        }
        return _this;
    }
    Action.prototype.handleAction = function (e) {
        var _this = this;
        var _a = this.props, onAction = _a.onAction, onClick = _a.onClick, disabled = _a.disabled, countDown = _a.countDown;
        var result = onClick && onClick(e, this.props);
        if (disabled || e.isDefaultPrevented() || result === false || !onAction) {
            return;
        }
        e.preventDefault();
        var action = pick_1.default(this.props, ActionProps);
        onAction(e, action);
        if (countDown) {
            var countDownEnd = Date.now() + countDown * 1000;
            this.setState({
                countDownEnd: countDownEnd,
                inCountDown: true,
                timeLeft: countDown
            });
            localStorage.setItem(this.localStorageKey, String(countDownEnd));
            setTimeout(function () {
                _this.handleCountDown();
            }, 1000);
        }
    };
    Action.prototype.handleCountDown = function () {
        var _this = this;
        // setTimeout 一般会晚于 1s，经过几十次后就不准了，所以使用真实时间进行 diff
        var timeLeft = Math.floor((this.state.countDownEnd - Date.now()) / 1000);
        if (timeLeft <= 0) {
            this.setState({
                inCountDown: false,
                timeLeft: timeLeft
            });
        }
        else {
            this.setState({
                timeLeft: timeLeft
            });
            setTimeout(function () {
                _this.handleCountDown();
            }, 1000);
        }
    };
    Action.prototype.render = function () {
        var _a, _b;
        var _c = this.props, type = _c.type, icon = _c.icon, iconClassName = _c.iconClassName, primary = _c.primary, size = _c.size, level = _c.level, countDownTpl = _c.countDownTpl, block = _c.block, className = _c.className, componentClass = _c.componentClass, tooltip = _c.tooltip, disabledTip = _c.disabledTip, tooltipPlacement = _c.tooltipPlacement, actionType = _c.actionType, link = _c.link, data = _c.data, __ = _c.translate, activeClassName = _c.activeClassName, isCurrentUrl = _c.isCurrentUrl, isMenuItem = _c.isMenuItem, active = _c.active, activeLevel = _c.activeLevel, tooltipContainer = _c.tooltipContainer, cx = _c.classnames;
        var label = this.props.label;
        var disabled = this.props.disabled;
        var isActive = !!active;
        if (actionType === 'link' && !isActive && link && isCurrentUrl) {
            isActive = isCurrentUrl(link);
        }
        // 倒计时
        if (this.state.inCountDown) {
            label = Remark_1.filterContents(__(countDownTpl), tslib_1.__assign(tslib_1.__assign({}, data), { timeLeft: this.state.timeLeft }));
            disabled = true;
        }
        var iconElement = icon_1.generateIcon(cx, icon, 'Button-icon', iconClassName);
        return isMenuItem ? (react_1.default.createElement("a", { className: cx(className, (_a = {},
                _a[activeClassName || 'is-active'] = isActive,
                _a['is-disabled'] = disabled,
                _a)), onClick: this.handleAction },
            label,
            iconElement)) : (react_1.default.createElement(Button_1.default, { className: cx(className, (_b = {},
                _b[activeClassName || 'is-active'] = isActive,
                _b)), size: size, level: activeLevel && isActive
                ? activeLevel
                : level || (primary ? 'primary' : undefined), onClick: this.handleAction, type: type && ~allowedType.indexOf(type) ? type : 'button', disabled: disabled, componentClass: componentClass, tooltip: Remark_1.filterContents(tooltip, data), disabledTip: Remark_1.filterContents(disabledTip, data), placement: tooltipPlacement, tooltipContainer: tooltipContainer, block: block, iconOnly: !!(icon && !label && level !== 'link') },
            label ? react_1.default.createElement("span", null, tpl_1.filter(String(label), data)) : null,
            iconElement));
    };
    var _a;
    Action.defaultProps = {
        type: 'button',
        componentClass: 'button',
        tooltipPlacement: 'bottom',
        activeClassName: 'is-active',
        countDownTpl: 'Action.countDown',
        countDown: 0
    };
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof react_1.default !== "undefined" && react_1.default.MouseEvent) === "function" ? _a : Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], Action.prototype, "handleAction", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], Action.prototype, "handleCountDown", null);
    return Action;
}(react_1.default.Component));
exports.Action = Action;
exports.default = theme_1.themeable(Action);
var ActionRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(ActionRenderer, _super);
    function ActionRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionRenderer.prototype.handleAction = function (e, action) {
        var _a = this.props, env = _a.env, onAction = _a.onAction, data = _a.data, ignoreConfirm = _a.ignoreConfirm;
        if (!ignoreConfirm && action.confirmText && env.confirm) {
            env
                .confirm(tpl_1.filter(action.confirmText, data))
                .then(function (confirmed) { return confirmed && onAction(e, action, data); });
        }
        else {
            onAction(e, action, data);
        }
    };
    ActionRenderer.prototype.isCurrentAction = function (link) {
        var _a = this.props, env = _a.env, data = _a.data;
        return env.isCurrentUrl(tpl_1.filter(link, data));
    };
    ActionRenderer.prototype.render = function () {
        var _a = this.props, env = _a.env, disabled = _a.disabled, btnDisabled = _a.btnDisabled, rest = tslib_1.__rest(_a, ["env", "disabled", "btnDisabled"]);
        return (react_1.default.createElement(Action, tslib_1.__assign({}, rest, { disabled: disabled || btnDisabled, onAction: this.handleAction, isCurrentUrl: this.isCurrentAction, tooltipContainer: env.getModalContainer ? env.getModalContainer : undefined })));
    };
    var _b;
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], ActionRenderer.prototype, "handleAction", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], ActionRenderer.prototype, "isCurrentAction", null);
    ActionRenderer = tslib_1.__decorate([
        factory_1.Renderer({
            test: /(^|\/)action$/,
            name: 'action'
        })
    ], ActionRenderer);
    return ActionRenderer;
}(react_1.default.Component));
exports.ActionRenderer = ActionRenderer;
var ButtonRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonRenderer, _super);
    function ButtonRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonRenderer = tslib_1.__decorate([
        factory_1.Renderer({
            test: /(^|\/)button$/,
            name: 'button'
        })
    ], ButtonRenderer);
    return ButtonRenderer;
}(ActionRenderer));
exports.ButtonRenderer = ButtonRenderer;
var SubmitRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(SubmitRenderer, _super);
    function SubmitRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmitRenderer = tslib_1.__decorate([
        factory_1.Renderer({
            test: /(^|\/)submit$/,
            name: 'submit'
        })
    ], SubmitRenderer);
    return SubmitRenderer;
}(ActionRenderer));
exports.SubmitRenderer = SubmitRenderer;
var ResetRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(ResetRenderer, _super);
    function ResetRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResetRenderer = tslib_1.__decorate([
        factory_1.Renderer({
            test: /(^|\/)reset$/,
            name: 'reset'
        })
    ], ResetRenderer);
    return ResetRenderer;
}(ActionRenderer));
exports.ResetRenderer = ResetRenderer;
//# sourceMappingURL=./renderers/Action.js.map
