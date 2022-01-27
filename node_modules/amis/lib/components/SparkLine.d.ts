/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps } from '../locale';
import { ThemeProps } from '../theme';
import { PlainObject } from '../types';
export interface SparkLineProps extends ThemeProps, LocaleProps {
    className?: string;
    width: number;
    height: number;
    value?: Array<number | {
        value: number;
        label?: string;
    }>;
    onClick?: (e: React.MouseEvent, value?: PlainObject) => void;
}
export declare class SparkLine extends React.Component<SparkLineProps> {
    static defaultProps: {
        width: number;
        height: number;
    };
    normalizeValue(item: any): number;
    renderLines(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: (Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
        width: number;
        height: number;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps) | Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
        width: number;
        height: number;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
        width: number;
        height: number;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "value" | "height" | "width" | "onClick" | "locale" | "translate"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: {
        new (props: (Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof SparkLine;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SparkLine, {}> & {
        ComposedComponent: typeof SparkLine;
    };
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: (Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
        width: number;
        height: number;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }) | Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
        width: number;
        height: number;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }>): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
        width: number;
        height: number;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof SparkLine;
} & import("hoist-non-react-statics").NonReactStatics<typeof SparkLine, {}> & {
    ComposedComponent: typeof SparkLine;
}, {}> & {
    ComposedComponent: {
        new (props: (Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
            width: number;
            height: number;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "classPrefix" | "className" | "classnames" | "theme" | "value" | "onClick"> & Partial<Pick<Pick<SparkLineProps, "classPrefix" | "className" | "classnames" | "theme" | "value" | "height" | "width" | "onClick">, "height" | "width">> & Partial<Pick<{
                width: number;
                height: number;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof SparkLine;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SparkLine, {}> & {
        ComposedComponent: typeof SparkLine;
    };
};
export default _default;
