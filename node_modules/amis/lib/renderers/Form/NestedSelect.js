"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedSelectControlRenderer = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Overlay_1 = tslib_1.__importDefault(require("../../components/Overlay"));
var Checkbox_1 = tslib_1.__importDefault(require("../../components/Checkbox"));
var PopOver_1 = tslib_1.__importDefault(require("../../components/PopOver"));
var react_overlays_1 = require("react-overlays");
var icons_1 = require("../../components/icons");
var helper_1 = require("../../utils/helper");
var Options_1 = require("../Form/Options");
var Select_1 = require("../../components/Select");
var react_dom_1 = require("react-dom");
var components_1 = require("../../components");
var xor_1 = tslib_1.__importDefault(require("lodash/xor"));
var union_1 = tslib_1.__importDefault(require("lodash/union"));
var NestedSelectControl = /** @class */ (function (_super) {
    tslib_1.__extends(NestedSelectControl, _super);
    function NestedSelectControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpened: false,
            isFocused: false,
            inputValue: '',
            stack: [_this.props.options]
        };
        return _this;
    }
    NestedSelectControl.prototype.domRef = function (ref) {
        this.target = ref;
    };
    NestedSelectControl.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.options !== this.props.options) {
            this.setState({
                stack: [this.props.options]
            });
        }
    };
    NestedSelectControl.prototype.handleOutClick = function (e) {
        var options = this.props.options;
        e.defaultPrevented ||
            this.setState({
                isOpened: true
            });
    };
    NestedSelectControl.prototype.close = function () {
        this.setState({
            isOpened: false
        });
    };
    NestedSelectControl.prototype.removeItem = function (index, e) {
        var _a = this.props, onChange = _a.onChange, selectedOptions = _a.selectedOptions, joinValues = _a.joinValues, valueField = _a.valueField, extractValue = _a.extractValue, delimiter = _a.delimiter, value = _a.value;
        e && e.stopPropagation();
        selectedOptions.splice(index, 1);
        if (joinValues) {
            value = selectedOptions
                .map(function (item) { return item[valueField || 'value']; })
                .join(delimiter || ',');
        }
        else if (extractValue) {
            value = selectedOptions.map(function (item) { return item[valueField || 'value']; });
        }
        onChange(value);
    };
    NestedSelectControl.prototype.renderValue = function (item, key) {
        var _a = this.props, cx = _a.classnames, labelField = _a.labelField, options = _a.options;
        var ancestors = helper_1.getTreeAncestors(options, item, true);
        return (react_1.default.createElement("span", { className: cx('Select-valueLabel'), key: key }, "" + (ancestors
            ? ancestors
                .map(function (item) { return "" + item[labelField || 'label']; })
                .join(' / ')
            : item[labelField || 'label'])));
    };
    NestedSelectControl.prototype.handleOptionClick = function (option) {
        var _a = this.props, multiple = _a.multiple, onChange = _a.onChange, joinValues = _a.joinValues, extractValue = _a.extractValue, valueField = _a.valueField;
        if (multiple) {
            return;
        }
        onChange(joinValues
            ? option[valueField || 'value']
            : extractValue
                ? option[valueField || 'value']
                : option);
        !multiple && this.close();
    };
    NestedSelectControl.prototype.handleCheck = function (option, index) {
        var _a = this.props, onChange = _a.onChange, selectedOptions = _a.selectedOptions, joinValues = _a.joinValues, delimiter = _a.delimiter, extractValue = _a.extractValue, withChildren = _a.withChildren, cascade = _a.cascade, options = _a.options;
        var stack = this.state.stack;
        var valueField = this.props.valueField || 'value';
        if (!Array.isArray(option) &&
            option.children &&
            option.children.length &&
            typeof index === 'number') {
            if (stack[index]) {
                stack.splice(index + 1, 1, option.children);
            }
            else {
                stack.push(option.children);
            }
        }
        var items = selectedOptions;
        var value;
        // 三种情况：
        // 1.全选，option为数组
        // 2.单个选中，且有children
        // 3.单个选中，没有children
        if (Array.isArray(option)) {
            option = withChildren ? helper_1.flattenTree(option) : option;
            value = items.length === option.length ? [] : option;
        }
        else if (Array.isArray(option.children)) {
            if (cascade) {
                value = xor_1.default(items, [option]);
            }
            else if (withChildren) {
                option = helper_1.flattenTree([option]);
                var isEvery = option.every(function (opt) { return !!~items.indexOf(opt); });
                value = (isEvery ? xor_1.default : union_1.default)(items, option);
            }
            else {
                value = items.filter(function (item) { return !~helper_1.flattenTree([option]).indexOf(item); });
                !~items.indexOf(option) && value.push(option);
            }
        }
        else {
            value = xor_1.default(items, [option]);
        }
        if (!cascade) {
            var toCheck = option;
            while (true) {
                var parent = helper_1.getTreeParent(options, toCheck);
                if (parent === null || parent === void 0 ? void 0 : parent.value) {
                    // 如果所有孩子节点都勾选了，应该自动勾选父级。
                    if (parent.children.every(function (child) { return ~value.indexOf(child); })) {
                        parent.children.forEach(function (child) {
                            var index = value.indexOf(child);
                            if (~index && !withChildren) {
                                value.splice(index, 1);
                            }
                        });
                        value.push(parent);
                        toCheck = parent;
                        continue;
                    }
                }
                break;
            }
        }
        onChange(joinValues
            ? value.map(function (item) { return item[valueField]; }).join(delimiter)
            : extractValue
                ? value.map(function (item) { return item[valueField]; })
                : value);
    };
    NestedSelectControl.prototype.allChecked = function (options) {
        var _this = this;
        var _a = this.props, selectedOptions = _a.selectedOptions, withChildren = _a.withChildren;
        return options.every(function (option) {
            if (withChildren && option.children) {
                return _this.allChecked(option.children);
            }
            return selectedOptions.some(function (item) { return item === option; });
        });
    };
    NestedSelectControl.prototype.partialChecked = function (options) {
        var _this = this;
        return options.some(function (option) {
            var childrenPartialChecked = option.children && _this.partialChecked(option.children);
            return (childrenPartialChecked ||
                _this.props.selectedOptions.some(function (item) { return item === option; }));
        });
    };
    NestedSelectControl.prototype.reload = function () {
        var reload = this.props.reloadOptions;
        reload && reload();
    };
    NestedSelectControl.prototype.onFocus = function (e) {
        this.props.disabled ||
            this.state.isOpened ||
            this.setState({
                isFocused: true
            });
    };
    NestedSelectControl.prototype.onBlur = function (e) {
        this.setState({
            isFocused: false
        });
    };
    NestedSelectControl.prototype.getTarget = function () {
        if (!this.target) {
            this.target = react_dom_1.findDOMNode(this);
        }
        return this.target;
    };
    NestedSelectControl.prototype.handleKeyPress = function (e) {
        if (e.key === ' ') {
            this.handleOutClick(e);
            e.preventDefault();
        }
    };
    NestedSelectControl.prototype.handleInputKeyDown = function (event) {
        var inputValue = this.state.inputValue;
        var _a = this.props, multiple = _a.multiple, selectedOptions = _a.selectedOptions;
        if (event.key === 'Backspace' &&
            !inputValue &&
            selectedOptions.length &&
            multiple) {
            this.removeItem(selectedOptions.length - 1);
        }
    };
    NestedSelectControl.prototype.handleInputChange = function (inputValue) {
        var _a = this.props, options = _a.options, labelField = _a.labelField, valueField = _a.valueField;
        var regexp = helper_1.string2regExp(inputValue);
        var filtedOptions = inputValue && this.state.isOpened
            ? helper_1.filterTree(options, function (option) {
                return regexp.test(option[labelField || 'label']) ||
                    regexp.test(option[valueField || 'value']) ||
                    !!(option.children && option.children.length);
            }, 1, true)
            : options.concat();
        this.setState({
            inputValue: inputValue,
            stack: [filtedOptions]
        });
    };
    NestedSelectControl.prototype.handleResultChange = function (value) {
        var _a = this.props, joinValues = _a.joinValues, extractValue = _a.extractValue, delimiter = _a.delimiter, valueField = _a.valueField, onChange = _a.onChange, multiple = _a.multiple;
        var newValue = Array.isArray(value) ? value.concat() : [];
        if (!multiple && !newValue.length) {
            onChange('');
            return;
        }
        if (joinValues || extractValue) {
            newValue = value.map(function (item) { return item[valueField || 'value']; });
        }
        if (joinValues) {
            newValue = newValue.join(delimiter || ',');
        }
        onChange(newValue);
    };
    NestedSelectControl.prototype.renderOptions = function () {
        var _this = this;
        var _a = this.props, multiple = _a.multiple, selectedOptions = _a.selectedOptions, cx = _a.classnames, propOptions = _a.options, disabled = _a.disabled, checkAll = _a.checkAll, checkAllLabel = _a.checkAllLabel, __ = _a.translate, labelField = _a.labelField, cascade = _a.cascade;
        var valueField = this.props.valueField || 'value';
        var stack = this.state.stack;
        var partialChecked = this.partialChecked(propOptions);
        var allChecked = this.allChecked(propOptions);
        return (react_1.default.createElement(react_1.default.Fragment, null, stack.map(function (options, index) { return (react_1.default.createElement("div", { key: index, className: cx('NestedSelect-menu') },
            multiple && checkAll && index === 0 ? (react_1.default.createElement("div", { className: cx('NestedSelect-option', 'checkall') },
                react_1.default.createElement(Checkbox_1.default, { size: "sm", onChange: _this.handleCheck.bind(_this, options), checked: partialChecked, partial: partialChecked && !allChecked }),
                react_1.default.createElement("span", { onClick: _this.handleCheck.bind(_this, options) }, __(checkAllLabel)))) : null,
            options.map(function (option, idx) {
                var ancestors = helper_1.getTreeAncestors(propOptions, option);
                var parentChecked = ancestors === null || ancestors === void 0 ? void 0 : ancestors.some(function (item) { return !!~selectedOptions.indexOf(item); });
                var uncheckable = cascade ? false : multiple && parentChecked;
                var selfChecked = uncheckable || !!~selectedOptions.indexOf(option);
                var parentDisabled = ancestors === null || ancestors === void 0 ? void 0 : ancestors.some(function (item) { return !!item.disabled; });
                var nodeDisabled = uncheckable || option.disabled || parentDisabled || !!disabled;
                var selfChildrenChecked = !!(option.children && _this.partialChecked(option.children));
                return (react_1.default.createElement("div", { key: idx, className: cx('NestedSelect-option', {
                        'is-active': !nodeDisabled &&
                            (selfChecked || (!cascade && selfChildrenChecked))
                    }), onMouseEnter: _this.onMouseEnter.bind(_this, option, index) },
                    multiple ? (react_1.default.createElement(Checkbox_1.default, { size: "sm", onChange: _this.handleCheck.bind(_this, option, index), trueValue: option[valueField], checked: selfChecked || (!cascade && selfChildrenChecked), partial: !selfChecked, disabled: nodeDisabled })) : null,
                    react_1.default.createElement("div", { className: cx('NestedSelect-optionLabel', {
                            'is-disabled': nodeDisabled
                        }), onClick: function () {
                            return !nodeDisabled &&
                                (multiple
                                    ? _this.handleCheck(option, index)
                                    : _this.handleOptionClick(option));
                        } }, option[labelField || 'label']),
                    option.children && option.children.length ? (react_1.default.createElement("div", { className: cx('NestedSelect-optionArrowRight') },
                        react_1.default.createElement(icons_1.Icon, { icon: "right-arrow", className: "icon" }))) : null));
            }))); })));
    };
    NestedSelectControl.prototype.onMouseEnter = function (option, index, e) {
        var stack = this.state.stack;
        index = index + 1;
        var children = option.children;
        if (children && children.length) {
            if (stack[index]) {
                stack.splice(index, 1, children);
            }
            else {
                stack.push(children);
            }
        }
        else {
            stack[index] && stack.splice(index, 1);
        }
        this.setState({ stack: stack.slice(0, index + 1) });
    };
    NestedSelectControl.prototype.renderOuter = function () {
        var _a = this.props, popOverContainer = _a.popOverContainer, cx = _a.classnames;
        var body = (react_1.default.createElement(react_overlays_1.RootCloseWrapper, { disabled: !this.state.isOpened, onRootClose: this.close },
            react_1.default.createElement("div", { className: cx('NestedSelect-menuOuter') }, this.renderOptions())));
        return (react_1.default.createElement(Overlay_1.default, { container: popOverContainer || this.getTarget, target: this.getTarget, show: true },
            react_1.default.createElement(PopOver_1.default, { className: cx('NestedSelect-popover') }, body)));
    };
    NestedSelectControl.prototype.render = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, cx = _a.classnames, multiple = _a.multiple, placeholder = _a.placeholder, __ = _a.translate, inline = _a.inline, searchable = _a.searchable, autoComplete = _a.autoComplete, selectedOptions = _a.selectedOptions, clearable = _a.clearable, loading = _a.loading;
        return (react_1.default.createElement("div", { className: cx('NestedSelectControl', className) },
            react_1.default.createElement(components_1.ResultBox, { disabled: disabled, ref: this.domRef, placeholder: __(placeholder || '空'), className: cx("NestedSelect", {
                    'NestedSelect--inline': inline,
                    'NestedSelect--single': !multiple,
                    'NestedSelect--multi': multiple,
                    'NestedSelect--searchable': searchable,
                    'is-opened': this.state.isOpened,
                    'is-focused': this.state.isFocused
                }), result: multiple
                    ? selectedOptions
                    : selectedOptions.length
                        ? this.renderValue(selectedOptions[0])
                        : '', onResultClick: this.handleOutClick, value: this.state.inputValue, onChange: this.handleInputChange, onResultChange: this.handleResultChange, itemRender: this.renderValue, onKeyPress: this.handleKeyPress, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.handleInputKeyDown, clearable: clearable, allowInput: searchable, inputPlaceholder: '' }, loading ? react_1.default.createElement(components_1.Spinner, { size: "sm" }) : undefined),
            this.state.isOpened ? this.renderOuter() : null));
    };
    var _a, _b, _c, _d, _e, _f, _g, _h;
    NestedSelectControl.defaultProps = {
        cascade: false,
        withChildren: false,
        searchPromptText: 'Select.searchPromptText',
        checkAll: true,
        checkAllLabel: '全选'
    };
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "domRef", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof react_1.default !== "undefined" && react_1.default.MouseEvent) === "function" ? _a : Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "handleOutClick", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "close", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Select_1.Option !== "undefined" && Select_1.Option) === "function" ? _b : Object, Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "renderValue", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof Select_1.Option !== "undefined" && Select_1.Option) === "function" ? _c : Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "handleOptionClick", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "handleCheck", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "onFocus", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "onBlur", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "getTarget", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof react_1.default !== "undefined" && react_1.default.KeyboardEvent) === "function" ? _f : Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "handleKeyPress", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof react_1.default !== "undefined" && react_1.default.KeyboardEvent) === "function" ? _g : Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "handleInputKeyDown", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "handleInputChange", null);
    tslib_1.__decorate([
        helper_1.autobind,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof Array !== "undefined" && Array) === "function" ? _h : Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NestedSelectControl.prototype, "handleResultChange", null);
    return NestedSelectControl;
}(react_1.default.Component));
exports.default = NestedSelectControl;
var NestedSelectControlRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(NestedSelectControlRenderer, _super);
    function NestedSelectControlRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NestedSelectControlRenderer = tslib_1.__decorate([
        Options_1.OptionsControl({
            type: 'nested-select'
        })
    ], NestedSelectControlRenderer);
    return NestedSelectControlRenderer;
}(NestedSelectControl));
exports.NestedSelectControlRenderer = NestedSelectControlRenderer;
//# sourceMappingURL=./renderers/Form/NestedSelect.js.map
