/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps } from '../../locale';
import { ThemeProps } from '../../theme';
export interface QuarterViewProps extends LocaleProps, ThemeProps {
    viewDate: moment.Moment;
    selectedDate: moment.Moment;
    inputFormat?: string;
    updateOn: string;
    subtractTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    addTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    setDate: (type: string) => () => void;
    showView: (view: string) => () => void;
    updateSelectedDate: (e: any, close?: boolean) => void;
    renderQuarter: any;
    isValidDate: any;
}
export declare class QuarterView extends React.Component<QuarterViewProps> {
    alwaysValidDate: any;
    renderYear(): JSX.Element | null;
    renderQuarters(): React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>[];
    renderQuarter: (props: any, quartar: number, year: number, date: moment.Moment) => JSX.Element;
    updateSelectedQuarter: (event: any) => void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: (Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }) | Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<QuarterViewProps, "classPrefix" | "className" | "classnames" | "theme" | "selectedDate" | "viewDate" | "inputFormat" | "updateOn" | "subtractTime" | "addTime" | "setDate" | "showView" | "updateSelectedDate" | "renderQuarter" | "isValidDate"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof QuarterView;
} & import("hoist-non-react-statics").NonReactStatics<typeof QuarterView, {}> & {
    ComposedComponent: typeof QuarterView;
};
export default _default;
