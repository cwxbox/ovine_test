"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuarterView = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var locale_1 = require("../../locale");
var QuarterView = /** @class */ (function (_super) {
    tslib_1.__extends(QuarterView, _super);
    function QuarterView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderQuarter = function (props, quartar, year, date) {
            return (react_1.default.createElement("td", tslib_1.__assign({}, props),
                react_1.default.createElement("span", null,
                    "Q",
                    quartar)));
        };
        _this.updateSelectedQuarter = function (event) {
            _this.props.updateSelectedDate(event);
        };
        return _this;
    }
    QuarterView.prototype.renderYear = function () {
        var __ = this.props.translate;
        var showYearHead = !/^mm$/i.test(this.props.inputFormat || '');
        if (!showYearHead) {
            return null;
        }
        var canClick = /yy/i.test(this.props.inputFormat || '');
        return (react_1.default.createElement("table", null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", { className: "rdtPrev", onClick: this.props.subtractTime(1, 'years') }, "\u00AB"),
                    canClick ? (react_1.default.createElement("th", { className: "rdtSwitch", onClick: this.props.showView('years') }, this.props.viewDate.format(__('dateformat.year')))) : (react_1.default.createElement("th", { className: "rdtSwitch" }, this.props.viewDate.format(__('dateformat.year')))),
                    react_1.default.createElement("th", { className: "rdtNext", onClick: this.props.addTime(1, 'years') }, "\u00BB")))));
    };
    QuarterView.prototype.renderQuarters = function () {
        var date = this.props.selectedDate, month = this.props.viewDate.month(), year = this.props.viewDate.year(), rows = [], i = 1, months = [], renderer = this.props.renderQuarter || this.renderQuarter, isValid = this.props.isValidDate || this.alwaysValidDate, classes, props, currentMonth, isDisabled, noOfDaysInMonth, daysInMonth, validDay, 
        // Date is irrelevant because we're only interested in month
        irrelevantDate = 1;
        while (i < 5) {
            classes = 'rdtQuarter';
            currentMonth = this.props.viewDate
                .clone()
                .set({ year: year, quarter: i, date: irrelevantDate });
            noOfDaysInMonth = currentMonth.endOf('quarter').format('Q');
            daysInMonth = Array.from({ length: parseInt(noOfDaysInMonth, 10) }, function (e, i) {
                return i + 1;
            });
            validDay = daysInMonth.find(function (d) {
                var day = currentMonth.clone().set('date', d);
                return isValid(day);
            });
            isDisabled = validDay === undefined;
            if (isDisabled)
                classes += ' rdtDisabled';
            if (date && i === date.quarter() && year === date.year())
                classes += ' rdtActive';
            props = {
                'key': i,
                'data-value': i,
                'className': classes
            };
            if (!isDisabled) {
                props.onClick =
                    this.props.updateOn === 'quarters'
                        ? this.updateSelectedQuarter
                        : this.props.setDate('quarter');
            }
            months.push(renderer(props, i, year, date && date.clone()));
            if (months.length === 2) {
                rows.push(react_1.default.createElement('tr', { key: month + '_' + rows.length }, months));
                months = [];
            }
            i++;
        }
        return rows;
    };
    QuarterView.prototype.render = function () {
        var cx = this.props.classnames;
        return (react_1.default.createElement("div", { className: cx('ClalendarQuarter') },
            this.renderYear(),
            react_1.default.createElement("table", null,
                react_1.default.createElement("tbody", null, this.renderQuarters()))));
    };
    return QuarterView;
}(react_1.default.Component));
exports.QuarterView = QuarterView;
exports.default = locale_1.localeable(QuarterView);
//# sourceMappingURL=./components/calendar/QuartersView.js.map
