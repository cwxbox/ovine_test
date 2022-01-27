/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../theme';
export interface NumberProps extends ThemeProps {
    placeholder?: string;
    max?: number;
    min?: number;
    step?: number;
    showSteps?: boolean;
    precision?: number;
    disabled?: boolean;
    value?: number;
    onChange?: (value: number) => void;
}
export declare class NumberInput extends React.Component<NumberProps, any> {
    static defaultProps: {
        step: number;
    };
    render(): JSX.Element;
}
declare const _default: {
    new (props: (Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
        step: number;
    }, never>> & import("../theme").ThemeOutterProps) | Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
        step: number;
    }, never>> & import("../theme").ThemeOutterProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
        step: number;
    }, never>> & import("../theme").ThemeOutterProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "value" | "disabled" | "placeholder" | "onChange" | "max" | "min" | "showSteps" | "precision"> & Partial<Pick<Pick<NumberProps, "value" | "disabled" | "placeholder" | "onChange" | "step" | "max" | "min" | "showSteps" | "precision">, "step">> & Partial<Pick<{
            step: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: typeof NumberInput;
} & import("hoist-non-react-statics").NonReactStatics<typeof NumberInput, {}> & {
    ComposedComponent: typeof NumberInput;
};
export default _default;
