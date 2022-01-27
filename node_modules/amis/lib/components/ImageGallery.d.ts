/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../theme';
import { LocaleProps } from '../locale';
export interface ImageGalleryProps extends ThemeProps, LocaleProps {
    children: React.ReactNode;
    modalContainer?: () => HTMLElement;
}
export interface ImageGalleryState {
    isOpened: boolean;
    index: number;
    items: Array<{
        src: string;
        originalSrc: string;
        title?: string;
        caption?: string;
    }>;
}
export declare class ImageGallery extends React.Component<ImageGalleryProps, ImageGalleryState> {
    state: ImageGalleryState;
    handleImageEnlarge(info: {
        src: string;
        originalSrc: string;
        list?: Array<{
            src: string;
            originalSrc: string;
            title?: string;
            caption?: string;
        }>;
        title?: string;
        caption?: string;
        index?: number;
    }): void;
    close(): void;
    prev(): void;
    next(): void;
    handleItemClick(e: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: (Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps) | Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, "children" | "locale" | "translate" | "modalContainer"> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: {
        new (props: (Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof ImageGallery;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ImageGallery, {}> & {
        ComposedComponent: typeof ImageGallery;
    };
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: (Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }) | Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }>): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof ImageGallery;
} & import("hoist-non-react-statics").NonReactStatics<typeof ImageGallery, {}> & {
    ComposedComponent: typeof ImageGallery;
}, {}> & {
    ComposedComponent: {
        new (props: (Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }) | Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, context: any): {
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<ImageGalleryProps, "classPrefix" | "children" | "className" | "classnames" | "theme" | "modalContainer"> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: typeof ImageGallery;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ImageGallery, {}> & {
        ComposedComponent: typeof ImageGallery;
    };
};
export default _default;
