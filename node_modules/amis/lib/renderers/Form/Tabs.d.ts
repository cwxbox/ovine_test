/// <reference types="react" />
import { RendererProps } from '../../factory';
import Tabs, { TabSchema, TabsSchema } from '../Tabs';
import { FormBaseControl, FormControlSchema } from './Item';
export declare type TabControlSchema = TabSchema & {
    /**
     * Tab 值, 当作为表当项使用时，这个值可以写入到表单中。
     */
    value?: string;
    /**
     * 表单项集合
     */
    controls?: Array<FormControlSchema>;
    /**
     * @deprecated 请用类型 tabs
     */
    tabs?: any;
    /**
     * @deprecated 请用类型 fieldSet
     */
    fieldSet?: any;
};
/**
 * Tabs
 * 文档：https://baidu.gitee.io/amis/docs/components/form/tabs
 */
export interface TabsControlSchema extends FormBaseControl, Omit<TabsSchema, 'tabs'> {
    type: 'tabs';
    /**
     * 如果配置了名称，Tabs 的打开项会同步写入变量中。
     */
    name?: string;
    tabs: Array<TabControlSchema>;
}
export interface TabsProps extends RendererProps {
}
export declare class TabsRenderer extends Tabs {
    static defaultProps: {
        mountOnEnter: boolean;
    };
    static propsList: Array<string>;
    renderTab: (tab: any, props: any, key: number) => JSX.Element;
    resolveTabByKey(key: any): TabSchema | undefined;
    resolveKeyByValue(value: any): string | number | undefined;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TabsProps, prevState: any): void;
}
