import React from 'react';
import { FormOptionsControl, OptionsControlProps } from '../Form/Options';
import { Option, Options } from '../../components/Select';
/**
 * Nested Select
 * 文档：https://baidu.gitee.io/amis/docs/components/form/nested-select
 */
export interface NestedSelectControlSchema extends FormOptionsControl {
    type: 'nested-select';
}
export interface NestedSelectProps extends OptionsControlProps {
    cascade?: boolean;
    withChildren?: boolean;
}
export interface NestedSelectState {
    isOpened?: boolean;
    isFocused?: boolean;
    inputValue?: string;
    stack: Array<Array<Option>>;
}
export default class NestedSelectControl extends React.Component<NestedSelectProps, NestedSelectState> {
    static defaultProps: Partial<NestedSelectProps>;
    target: any;
    input: HTMLInputElement;
    state: NestedSelectState;
    domRef(ref: any): void;
    componentDidUpdate(prevProps: NestedSelectProps): void;
    handleOutClick(e: React.MouseEvent<any>): void;
    close(): void;
    removeItem(index: number, e?: React.MouseEvent<HTMLElement>): void;
    renderValue(item: Option, key?: any): JSX.Element;
    handleOptionClick(option: Option): void;
    handleCheck(option: Option | Options, index?: number): void;
    allChecked(options: Options): boolean;
    partialChecked(options: Options): boolean;
    reload(): void;
    onFocus(e: any): void;
    onBlur(e: any): void;
    getTarget(): HTMLElement;
    handleKeyPress(e: React.KeyboardEvent): void;
    handleInputKeyDown(event: React.KeyboardEvent): void;
    handleInputChange(inputValue: string): void;
    handleResultChange(value: Array<Option>): void;
    renderOptions(): JSX.Element;
    onMouseEnter(option: Option, index: number, e: MouseEvent): void;
    renderOuter(): JSX.Element;
    render(): JSX.Element;
}
export declare class NestedSelectControlRenderer extends NestedSelectControl {
}
