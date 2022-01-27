/**
 * @file AnchorNav
 * @description 锚点导航
 * @author hsm-lv
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { Schema } from '../types';
import { ThemeProps } from '../theme';
import { PlainObject } from '../types';
export interface AnchorNavSectionProps extends ThemeProps {
    title?: string;
    name: string | number;
    body?: Schema;
    className?: string;
}
declare class AnchorNavSectionComponent extends React.PureComponent<AnchorNavSectionProps> {
    contentDom: any;
    contentRef: (ref: any) => any;
    render(): JSX.Element;
}
export declare const AnchorNavSection: {
    new (props: (Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps) | Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<AnchorNavSectionProps, "body" | "title" | "name"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof AnchorNavSectionComponent;
} & import("hoist-non-react-statics").NonReactStatics<typeof AnchorNavSectionComponent, {}> & {
    ComposedComponent: typeof AnchorNavSectionComponent;
};
export interface AnchorNavProps extends ThemeProps {
    links?: Array<AnchorNavSectionProps>;
    active?: string | number;
    linkClassName?: string;
    sectionClassName?: string;
    sectionRender?: (section: AnchorNavSectionProps, props?: AnchorNavProps) => JSX.Element;
    onSelect?: (key: string | number) => void;
}
export interface AnchorNavState {
    offsetArr: PlainObject[];
    fromSelect: boolean;
}
export declare class AnchorNav extends React.Component<AnchorNavProps, AnchorNavState> {
    static defaultProps: Pick<AnchorNavProps, 'linkClassName' | 'sectionClassName'>;
    contentDom: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    scrollToNav(e: Event): void;
    scrollToSection(key: string | number): void;
    handleSelect(key: string | number): void;
    fireSelect(key: string | number): void;
    renderLink(link: any, index: number): JSX.Element | undefined;
    renderSection(section: any, index: number): React.DetailedReactHTMLElement<any, HTMLElement> | undefined;
    render(): JSX.Element | null;
}
declare const _default: {
    new (props: (Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps) | Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "active" | "links" | "onSelect" | "sectionRender"> & Partial<Pick<Pick<AnchorNavProps, "active" | "links" | "onSelect" | "linkClassName" | "sectionClassName" | "sectionRender">, "linkClassName" | "sectionClassName">> & Partial<Pick<Pick<AnchorNavProps, "linkClassName" | "sectionClassName">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof AnchorNav;
} & import("hoist-non-react-statics").NonReactStatics<typeof AnchorNav, {}> & {
    ComposedComponent: typeof AnchorNav;
} & {
    AnchorNavSection: typeof AnchorNavSection;
};
export default _default;
