/**
 * @file ColorPicker
 * @description 颜色选择器组件
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ColorState } from 'react-color';
import { ThemeProps } from '../theme';
import { LocaleProps } from '../locale';
export interface ColorProps extends LocaleProps, ThemeProps {
    placeholder?: string;
    format: string;
    clearable: boolean;
    className?: string;
    disabled?: boolean;
    popOverContainer?: any;
    placement?: string;
    value?: any;
    onChange: (value: any) => void;
    presetColors?: string[];
    resetValue?: string;
    allowCustomColor?: boolean;
}
export interface ColorControlState {
    isOpened: boolean;
    isFocused: boolean;
    inputValue: string;
}
export declare class ColorControl extends React.PureComponent<ColorProps, ColorControlState> {
    static defaultProps: {
        format: string;
        clearable: boolean;
        placeholder: string;
        allowCustomColor: boolean;
    };
    state: {
        isOpened: boolean;
        isFocused: boolean;
        inputValue: any;
    };
    popover: any;
    closeTimer: number;
    preview: React.RefObject<HTMLElement>;
    input: React.RefObject<HTMLInputElement>;
    constructor(props: ColorProps);
    componentWillReceiveProps(nextProps: ColorProps): void;
    handleFocus(): void;
    handleBlur(): void;
    focus(): void;
    blur(): void;
    open(fn?: () => void): void;
    close(): void;
    clearValue(): void;
    handleClick(): void;
    handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    validateColor(value: string): boolean;
    handleChange(color: ColorState): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: (Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
        format: string;
        clearable: boolean;
        placeholder: string;
        allowCustomColor: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps) | Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
        format: string;
        clearable: boolean;
        placeholder: string;
        allowCustomColor: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
        format: string;
        clearable: boolean;
        placeholder: string;
        allowCustomColor: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "resetValue" | "disabled" | "placement" | "locale" | "translate" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: {
        new (props: (Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof ColorControl;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ColorControl, {}> & {
        ComposedComponent: typeof ColorControl;
    };
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: (Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
        format: string;
        clearable: boolean;
        placeholder: string;
        allowCustomColor: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }) | Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
        format: string;
        clearable: boolean;
        placeholder: string;
        allowCustomColor: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }>): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
        format: string;
        clearable: boolean;
        placeholder: string;
        allowCustomColor: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof ColorControl;
} & import("hoist-non-react-statics").NonReactStatics<typeof ColorControl, {}> & {
    ComposedComponent: typeof ColorControl;
}, {}> & {
    ComposedComponent: {
        new (props: (Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
            format: string;
            clearable: boolean;
            placeholder: string;
            allowCustomColor: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "onChange" | "popOverContainer" | "presetColors"> & Partial<Pick<Pick<ColorProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "resetValue" | "disabled" | "placement" | "placeholder" | "onChange" | "format" | "clearable" | "popOverContainer" | "presetColors" | "allowCustomColor">, "placeholder" | "format" | "clearable" | "allowCustomColor">> & Partial<Pick<{
                format: string;
                clearable: boolean;
                placeholder: string;
                allowCustomColor: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof ColorControl;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ColorControl, {}> & {
        ComposedComponent: typeof ColorControl;
    };
};
export default _default;
