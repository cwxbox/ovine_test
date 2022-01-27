/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { RendererProps } from '../factory';
import { ThemeProps } from '../theme';
import { LocaleProps } from '../locale';
import { BaseSchema, SchemaClassName, SchemaTpl, SchemaUrlPath } from '../Schema';
/**
 * 图片展示控件。
 * 文档：https://baidu.gitee.io/amis/docs/components/image
 */
export interface ImageSchema extends BaseSchema {
    /**
     * 指定为图片展示类型
     */
    type: 'image' | 'static-image';
    /**
     * 默认图片地址
     */
    defaultImage?: SchemaUrlPath;
    /**
     * 图片标题
     */
    title?: SchemaTpl;
    /**
     * 关联字段名，也可以直接配置 src
     */
    name?: string;
    /**
     * 图片描述信息
     */
    imageCaption?: SchemaTpl;
    /**
     * 图片地址，如果配置了 name，这个属性不用配置。
     */
    src?: SchemaUrlPath;
    /**
     * 大图地址，不设置用 src
     */
    originalSrc?: SchemaUrlPath;
    /**
     * 是否启动放大功能。
     */
    enlargeAble?: boolean;
    /**
     * 是否显示尺寸。
     */
    showDimensions?: boolean;
    /**
     * 图片无法显示时的替换文本
     */
    alt?: string;
    /**
     * 高度
     */
    height?: number;
    /**
     * 宽度
     */
    width?: number;
    /**
     * 图片 css 类名
     */
    imageClassName?: SchemaClassName;
    /**
     * 外层 css 类名
     */
    className?: SchemaClassName;
    /**
     * 图片缩率图外层 css 类名
     */
    thumbClassName?: SchemaClassName;
    caption?: SchemaTpl;
    /**
     * 预览图模式
     */
    thumbMode?: 'w-full' | 'h-full' | 'contain' | 'cover';
    /**
     * 预览图比率
     */
    thumbRatio?: '1:1' | '4:3' | '16:9';
}
export interface ImageThumbProps extends LocaleProps, ThemeProps, Omit<ImageSchema, 'type' | 'className'> {
    onEnlarge?: (info: ImageThumbProps) => void;
    index?: number;
    onLoad?: React.EventHandler<any>;
}
export declare class ImageThumb extends React.Component<ImageThumbProps> {
    handleEnlarge(): void;
    render(): JSX.Element;
}
declare const ThemedImageThumb: {
    new (props: (Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps) | Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "caption" | "title" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "locale" | "translate" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: {
        new (props: (Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof ImageThumb;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ImageThumb, {}> & {
        ComposedComponent: typeof ImageThumb;
    };
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: (Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }) | Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }>): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof ImageThumb;
} & import("hoist-non-react-statics").NonReactStatics<typeof ImageThumb, {}> & {
    ComposedComponent: typeof ImageThumb;
}, {}> & {
    ComposedComponent: {
        new (props: (Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageThumbProps, "classPrefix" | "caption" | "title" | "className" | "classnames" | "theme" | "name" | "hidden" | "height" | "width" | "index" | "visible" | "disabled" | "onLoad" | "alt" | "src" | "$ref" | "disabledOn" | "hiddenOn" | "visibleOn" | "defaultImage" | "imageCaption" | "originalSrc" | "enlargeAble" | "showDimensions" | "imageClassName" | "thumbClassName" | "thumbMode" | "thumbRatio" | "onEnlarge"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof ImageThumb;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ImageThumb, {}> & {
        ComposedComponent: typeof ImageThumb;
    };
};
export default ThemedImageThumb;
export declare const imagePlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAP1BMVEXp7vG6vsHo7fC3ur7s8fXr8PO1uLy8wMO5vcDL0NLN0dXl6u3T19vHy86+wsXO0tbQ1djc4eTh5ejBxcjZ3eD/ULOKAAACiklEQVR42u3a2YrjMBCF4arSVrYTL3Le/1lHXqbdPTZDWheRDOcLAZGrnyLgRSIAAAAAAAAAAAAAAAAAAAAAAAAAAAD4IrmoGBHKVSxbyFEm56hMtRBN7TNPO1GRaiFpvDd5vG+lQLUQNT6EwDlCYD+4AtF2Ug4mkzKb+PFqITf6oP3wyDEEZTPaz0dT63s/2DxPw6YtFT2S7Lr0eZtrSkYP64pShrXWyZsVhaNHt6xScjdNUSy9lyG2fLTYbpyZw/NFJDeJFhdnb4wab1ohuUc0dbPnwMxB/WhFbhFtR8+boBwvSkSktmiS2fDu8oohzoqQ1BQtLgY9oht3HutrXKvrjX4SyekexTys1DVp6vojeimRf5t1ra5p0lvBTvVlz83MW3VV0TF1bfwsJOfmv9UVRYt9eN2a++gumo/qeqJJ3Ks3i+dl81FNUk90ipDX0I4TfW+WvflndT3R6WsTJ/9r3qvriSb569x8VPNaXU/0149y0XxU+4cjqSpaZK8+mq+rK4pOofE5WZFT86m6omjbzT4s1UfzZXVFf4+1uTc82aWZTeArGkzoXC3R25w1LNX2lZqVr2lfPnpZHc3MqTpOejSfmAqiHcn35kRDCk8qnnSKPpo3qqx1R6fV3swHrX/SazP/UHl0Wrml+VbRTmhpvlu0i6o3jA6IPlQTHWqJZqNv4ypumFJ0z+FtPc8VRJNI9zvln1wytrhrenLZ3GGjqHWW3O/tm5+Ftpm5Gdrht9qh2V6CCH2Y2KgmsM9imFWj+3w00eiVQx5eN8Lo44RkVJOLR5IyR2tcHJs8Y7SlDjGJtS6PteWOi53d4WQe3a8YAAAAAAAAAAAAAAAAAAAAAAAAAACgNn8AGA09DkR51CoAAAAASUVORK5CYII=";
export interface ImageFieldProps extends RendererProps {
    className?: string;
    imageClassName?: string;
    placeholder: string;
    description?: string;
    enlargeTitle?: string;
    enlargeCaption?: string;
    thumbMode: 'w-full' | 'h-full' | 'contain' | 'cover';
    thumbRatio: '1:1' | '4:3' | '16:9';
    originalSrc?: string;
    enlargeAble?: boolean;
    onImageEnlarge?: (info: {
        src: string;
        originalSrc: string;
        title?: string;
        caption?: string;
        thumbMode?: 'w-full' | 'h-full' | 'contain' | 'cover';
        thumbRatio?: '1:1' | '4:3' | '16:9';
    }, target: any) => void;
    showDimensions?: boolean;
}
export declare class ImageField extends React.Component<ImageFieldProps, object> {
    static defaultProps: Pick<ImageFieldProps, 'defaultImage' | 'thumbMode' | 'thumbRatio' | 'placeholder'>;
    handleEnlarge({ src, originalSrc, title, caption, thumbMode, thumbRatio }: ImageThumbProps): void;
    render(): JSX.Element;
}
export declare class ImageFieldRenderer extends ImageField {
}
