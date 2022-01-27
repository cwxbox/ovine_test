/// <reference types="hoist-non-react-statics" />
/**
 * 级联多选框，支持无限极。从左侧到右侧一层层点选。
 */
import { BaseCheckboxes, BaseCheckboxesProps } from './Checkboxes';
import React from 'react';
import { Option } from './Select';
export interface ChainedCheckboxesProps extends BaseCheckboxesProps {
    defaultSelectedIndex?: string;
}
export interface ChainedCheckboxesState {
    selected: Array<string>;
}
export declare class ChainedCheckboxes extends BaseCheckboxes<ChainedCheckboxesProps, ChainedCheckboxesState> {
    valueArray: Array<Option>;
    state: ChainedCheckboxesState;
    componentDidMount(): void;
    selectOption(option: Option, depth: number, id: string): void;
    renderOption(option: Option, index: number, depth: number, id: string): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: (Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
        placeholder: string;
        itemRender: (option: Option) => JSX.Element;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps) | Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
        placeholder: string;
        itemRender: (option: Option) => JSX.Element;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
        placeholder: string;
        itemRender: (option: Option) => JSX.Element;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "options" | "inline" | "disabled" | "locale" | "translate" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: {
        new (props: (Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof ChainedCheckboxes;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ChainedCheckboxes, {}> & {
        ComposedComponent: typeof ChainedCheckboxes;
    };
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: (Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
        placeholder: string;
        itemRender: (option: Option) => JSX.Element;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }) | Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
        placeholder: string;
        itemRender: (option: Option) => JSX.Element;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }>): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
        placeholder: string;
        itemRender: (option: Option) => JSX.Element;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof ChainedCheckboxes;
} & import("hoist-non-react-statics").NonReactStatics<typeof ChainedCheckboxes, {}> & {
    ComposedComponent: typeof ChainedCheckboxes;
}, {}> & {
    ComposedComponent: {
        new (props: (Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: (option: Option) => JSX.Element;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "defaultSelectedIndex"> & Partial<Pick<Pick<ChainedCheckboxesProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "options" | "inline" | "disabled" | "placeholder" | "onChange" | "labelClassName" | "onDeferLoad" | "option2value" | "itemClassName" | "itemRender" | "defaultSelectedIndex">, "placeholder" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: (option: Option) => JSX.Element;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof ChainedCheckboxes;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ChainedCheckboxes, {}> & {
        ComposedComponent: typeof ChainedCheckboxes;
    };
};
export default _default;
