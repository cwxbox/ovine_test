/// <reference types="react" />
import { RendererProps } from '../../factory';
import AnchorNav, { AnchorNavSectionSchema, AnchorNavSchema } from '../AnchorNav';
import { FormBaseControl, FormControlSchema } from './Item';
export declare type AnchorNavSectionControlSchema = AnchorNavSectionSchema & {
    /**
     * 表单项集合
     */
    controls?: Array<FormControlSchema>;
};
/**
 * AnchorNav
 * 文档：https://baidu.gitee.io/amis/docs/components/form/anchor-nav
 */
export interface AnchorNavControlSchema extends FormBaseControl, Omit<AnchorNavSchema, 'links'> {
    type: 'anchor-nav';
    links: Array<AnchorNavSectionControlSchema>;
}
export interface AnchorNavProps extends RendererProps {
}
export declare class AnchorNavRenderer extends AnchorNav {
    static defaultProps: {
        mountOnEnter: boolean;
    };
    static propsList: Array<string>;
    renderSection: (section: any, props: any, key: number) => JSX.Element;
}
