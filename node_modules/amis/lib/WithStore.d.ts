export declare function HocStoreFactory(renderer: {
    storeType: string;
    extendsData?: boolean;
    shouldSyncSuperStore?: (store: any, props: any, prevProps: any) => boolean | undefined;
}): any;
