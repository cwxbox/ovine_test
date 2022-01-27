/**
 * @file DateRangePicker
 * @description 自定义日期范围时间选择器组件
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import moment from 'moment';
import { ShortCuts } from './DatePicker';
import { ThemeProps } from '../theme';
import { PlainObject } from '../types';
import { LocaleProps } from '../locale';
export interface DateRangePickerProps extends ThemeProps, LocaleProps {
    className?: string;
    placeholder?: string;
    theme?: any;
    format: string;
    utc?: boolean;
    inputFormat?: string;
    ranges?: string | Array<ShortCuts>;
    clearable?: boolean;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    minDuration?: moment.Duration;
    maxDuration?: moment.Duration;
    joinValues: boolean;
    delimiter: string;
    value?: any;
    onChange: (value: any) => void;
    data?: any;
    disabled?: boolean;
    closeOnSelect?: boolean;
    overlayPlacement: string;
    timeFormat?: string;
    resetValue?: any;
    popOverContainer?: any;
    dateFormat?: string;
    embed?: boolean;
}
export interface DateRangePickerState {
    isOpened: boolean;
    isFocused: boolean;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
}
export declare class DateRangePicker extends React.Component<DateRangePickerProps, DateRangePickerState> {
    static defaultProps: {
        placeholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    };
    innerDom: any;
    popover: any;
    input?: HTMLInputElement;
    static formatValue(newValue: any, format: string, joinValues: boolean, delimiter: string, utc?: boolean): any;
    static unFormatValue(value: any, format: string, joinValues: boolean, delimiter: string): {
        startDate: moment.Moment | undefined;
        endDate: moment.Moment | undefined;
    };
    dom: React.RefObject<HTMLDivElement>;
    nextMonth: moment.Moment;
    constructor(props: DateRangePickerProps);
    componentWillReceiveProps(nextProps: DateRangePickerProps): void;
    focus(): void;
    blur(): void;
    handleFocus(): void;
    handleBlur(): void;
    open(): void;
    close(): void;
    handleClick(): void;
    handlePopOverClick(e: React.MouseEvent<any>): void;
    handleKeyPress(e: React.KeyboardEvent): void;
    confirm(): void;
    filterDate(date: moment.Moment, originValue?: moment.Moment, timeFormat?: string, type?: 'start' | 'end'): moment.Moment;
    handleStartChange(newValue: moment.Moment): void;
    handleEndChange(newValue: moment.Moment): void;
    selectRannge(range: PlainObject): void;
    renderRanges(ranges: string | Array<ShortCuts> | undefined): JSX.Element | null;
    clearValue(e: React.MouseEvent<any>): void;
    checkStartIsValidDate(currentDate: moment.Moment): boolean;
    checkEndIsValidDate(currentDate: moment.Moment): boolean;
    renderDay(props: any, currentDate: moment.Moment): JSX.Element;
    renderCalendar(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: (Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
        placeholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps) | Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
        placeholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
        placeholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "data" | "embed" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: {
        new (props: (Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof DateRangePicker;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DateRangePicker, {}> & {
        ComposedComponent: typeof DateRangePicker;
    };
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: (Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
        placeholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }) | Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
        placeholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }>): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
        placeholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof DateRangePicker;
} & import("hoist-non-react-statics").NonReactStatics<typeof DateRangePicker, {}> & {
    ComposedComponent: typeof DateRangePicker;
}, {}> & {
    ComposedComponent: {
        new (props: (Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
            placeholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "disabled" | "onChange" | "popOverContainer" | "timeFormat" | "dateFormat" | "utc" | "minDate" | "maxDate" | "minDuration" | "maxDuration"> & Partial<Pick<Pick<DateRangePickerProps, "classPrefix" | "data" | "embed" | "className" | "classnames" | "theme" | "value" | "delimiter" | "joinValues" | "resetValue" | "disabled" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "timeFormat" | "inputFormat" | "dateFormat" | "utc" | "closeOnSelect" | "minDate" | "maxDate" | "overlayPlacement" | "ranges" | "minDuration" | "maxDuration">, "delimiter" | "joinValues" | "resetValue" | "placeholder" | "format" | "clearable" | "inputFormat" | "closeOnSelect" | "overlayPlacement" | "ranges">> & Partial<Pick<{
                placeholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof DateRangePicker;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DateRangePicker, {}> & {
        ComposedComponent: typeof DateRangePicker;
    };
};
export default _default;
