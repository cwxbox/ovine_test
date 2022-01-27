/**
 * @file Tabs
 * @description 选项卡
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { Schema } from '../types';
import { ThemeProps } from '../theme';
export interface TabProps extends ThemeProps {
    title?: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
    disabled?: boolean | string;
    eventKey: string | number;
    tab?: Schema;
    className?: string;
    activeKey?: string | number;
    reload?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    toolbar?: React.ReactNode;
}
declare class TabComponent extends React.PureComponent<TabProps> {
    contentDom: any;
    contentRef: (ref: any) => any;
    render(): JSX.Element;
}
export declare const Tab: {
    new (props: (Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps) | Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof TabComponent;
} & import("hoist-non-react-statics").NonReactStatics<typeof TabComponent, {}> & {
    ComposedComponent: typeof TabComponent;
};
export interface TabsProps extends ThemeProps {
    mode: '' | 'line' | 'card' | 'radio' | 'vertical' | 'chrome';
    tabsMode?: '' | 'line' | 'card' | 'radio' | 'vertical' | 'chrome';
    additionBtns?: React.ReactNode;
    onSelect?: (key: string | number) => void;
    activeKey?: string | number;
    contentClassName: string;
    className?: string;
    tabs?: Array<TabProps>;
    tabRender?: (tab: TabProps, props?: TabsProps) => JSX.Element;
    toolbar?: React.ReactNode;
}
export declare class Tabs extends React.Component<TabsProps> {
    static defaultProps: Pick<TabsProps, 'mode' | 'contentClassName'>;
    static Tab: {
        new (props: (Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps) | Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>): {
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TabProps, "title" | "reload" | "icon" | "tab" | "toolbar" | "disabled" | "mountOnEnter" | "unmountOnExit" | "iconPosition" | "eventKey" | "activeKey"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof TabComponent;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TabComponent, {}> & {
        ComposedComponent: typeof TabComponent;
    };
    handleSelect(key: string | number): void;
    renderNav(child: any, index: number): JSX.Element | undefined;
    renderTab(child: any, index: number): React.DetailedReactHTMLElement<any, HTMLElement> | undefined;
    render(): JSX.Element | null;
}
declare const _default: {
    new (props: (Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps) | Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "toolbar" | "onSelect" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender"> & Partial<Pick<Pick<TabsProps, "toolbar" | "mode" | "onSelect" | "contentClassName" | "activeKey" | "tabsMode" | "additionBtns" | "tabs" | "tabRender">, "mode" | "contentClassName">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof Tabs;
} & import("hoist-non-react-statics").NonReactStatics<typeof Tabs, {}> & {
    ComposedComponent: typeof Tabs;
} & {
    Tab: typeof Tab;
};
export default _default;
