"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HocStoreFactory = void 0;
var tslib_1 = require("tslib");
var hoist_non_react_statics_1 = tslib_1.__importDefault(require("hoist-non-react-statics"));
var mobx_react_1 = require("mobx-react");
var react_1 = tslib_1.__importDefault(require("react"));
var filter_schema_1 = tslib_1.__importDefault(require("./utils/filter-schema"));
var helper_1 = require("./utils/helper");
var WithRootStore_1 = require("./WithRootStore");
function HocStoreFactory(renderer) {
    return function (Component) {
        var StoreFactory = /** @class */ (function (_super) {
            tslib_1.__extends(StoreFactory, _super);
            function StoreFactory() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StoreFactory.prototype.getWrappedInstance = function () {
                return this.ref;
            };
            StoreFactory.prototype.refFn = function (ref) {
                this.ref = ref;
            };
            StoreFactory.prototype.formatData = function (data) {
                if (Array.isArray(data)) {
                    return {
                        items: data
                    };
                }
                return data;
            };
            StoreFactory.prototype.componentWillMount = function () {
                var rootStore = this.context;
                this.renderChild = this.renderChild.bind(this);
                this.refFn = this.refFn.bind(this);
                var store = rootStore.addStore({
                    id: helper_1.guid(),
                    path: this.props.$path,
                    storeType: renderer.storeType,
                    parentId: this.props.store ? this.props.store.id : ''
                });
                this.store = store;
                if (renderer.extendsData === false) {
                    store.initData(helper_1.createObject(this.props.data
                        ? this.props.data.__super
                        : null, tslib_1.__assign(tslib_1.__assign({}, this.formatData(this.props.defaultData)), this.formatData(this.props.data))));
                }
                else if (this.props.scope ||
                    (this.props.data && this.props.data.__super)) {
                    if (this.props.store && this.props.data === this.props.store.data) {
                        store.initData(helper_1.createObject(this.props.store.data, tslib_1.__assign({}, this.formatData(this.props.defaultData))));
                    }
                    else {
                        store.initData(helper_1.createObject(this.props.data.__super || this.props.scope, tslib_1.__assign(tslib_1.__assign({}, this.formatData(this.props.defaultData)), this.formatData(this.props.data))));
                    }
                }
                else {
                    store.initData(tslib_1.__assign(tslib_1.__assign({}, this.formatData(this.props.defaultData)), this.formatData(this.props.data)));
                }
            };
            StoreFactory.prototype.componentWillReceiveProps = function (nextProps) {
                var _a, _b;
                var props = this.props;
                var store = this.store;
                var shouldSync = (_a = renderer.shouldSyncSuperStore) === null || _a === void 0 ? void 0 : _a.call(renderer, store, nextProps, props);
                if (shouldSync === false) {
                    return;
                }
                if (renderer.extendsData === false) {
                    if (shouldSync === true ||
                        props.defaultData !== nextProps.defaultData ||
                        helper_1.isObjectShallowModified(props.data, nextProps.data) ||
                        //
                        // 特殊处理 CRUD。
                        // CRUD 中 toolbar 里面的 data 是空对象，但是 __super 会不一样
                        (nextProps.data &&
                            props.data &&
                            nextProps.data.__super !== props.data.__super)) {
                        store.initData(helper_1.extendObject(nextProps.data, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (store.hasRemoteData ? store.data : null)), this.formatData(nextProps.defaultData)), this.formatData(nextProps.data))));
                    }
                }
                else if (shouldSync === true ||
                    helper_1.isObjectShallowModified(props.data, nextProps.data)) {
                    if (nextProps.store && nextProps.store.data === nextProps.data) {
                        store.initData(helper_1.createObject(nextProps.store.data, nextProps.syncSuperStore === false
                            ? tslib_1.__assign({}, store.data) : helper_1.syncDataFromSuper(store.data, nextProps.store.data, props.scope, store, nextProps.syncSuperStore === true)));
                    }
                    else if (nextProps.data && nextProps.data.__super) {
                        store.initData(helper_1.extendObject(nextProps.data));
                    }
                    else {
                        store.initData(helper_1.createObject(nextProps.scope, nextProps.data));
                    }
                }
                else if ((shouldSync === true ||
                    !nextProps.store ||
                    nextProps.data !== nextProps.store.data) &&
                    nextProps.data &&
                    nextProps.data.__super) {
                    // 这个用法很少，当 data.__super 值发生变化时，更新 store.data
                    (!props.data ||
                        helper_1.isObjectShallowModified(nextProps.data.__super, props.data.__super, false)) &&
                        // nextProps.data.__super !== props.data.__super) &&
                        store.initData(helper_1.createObject(nextProps.data.__super, tslib_1.__assign(tslib_1.__assign({}, nextProps.data), store.data)), store.storeType === 'FormStore' &&
                            ((_b = props.store) === null || _b === void 0 ? void 0 : _b.storeType) === 'CRUDStore');
                }
                else if (nextProps.scope &&
                    nextProps.data === nextProps.store.data &&
                    (shouldSync === true || props.data !== nextProps.data)) {
                    store.initData(helper_1.createObject(nextProps.scope, tslib_1.__assign({}, store.data)));
                }
            };
            StoreFactory.prototype.componentWillUnmount = function () {
                var rootStore = this.context;
                var store = this.store;
                rootStore.removeStore(store);
                // @ts-ignore
                delete this.store;
            };
            StoreFactory.prototype.renderChild = function (region, node, subProps) {
                if (subProps === void 0) { subProps = {}; }
                var render = this.props.render;
                return render(region, node, tslib_1.__assign(tslib_1.__assign({ data: this.store.data, dataUpdatedAt: this.store.updatedAt }, subProps), { scope: this.store.data, store: this.store }));
            };
            StoreFactory.prototype.render = function () {
                var _a = this.props, detectField = _a.detectField, rest = tslib_1.__rest(_a, ["detectField"]);
                var exprProps = {};
                if (!detectField || detectField === 'data') {
                    exprProps = filter_schema_1.default(rest, this.store.data, undefined, rest);
                    if (exprProps.hidden || exprProps.visible === false) {
                        return null;
                    }
                }
                return (react_1.default.createElement(Component, tslib_1.__assign({}, rest /* todo */, exprProps, { ref: this.refFn, data: this.store.data, dataUpdatedAt: this.store.updatedAt, store: this.store, scope: this.store.data, render: this.renderChild })));
            };
            StoreFactory.displayName = "WithStore(" + (Component.displayName || Component.name) + ")";
            StoreFactory.ComposedComponent = Component;
            StoreFactory.contextType = WithRootStore_1.RootStoreContext;
            StoreFactory = tslib_1.__decorate([
                mobx_react_1.observer
            ], StoreFactory);
            return StoreFactory;
        }(react_1.default.Component));
        hoist_non_react_statics_1.default(StoreFactory, Component);
        return StoreFactory;
    };
}
exports.HocStoreFactory = HocStoreFactory;
//# sourceMappingURL=./WithStore.js.map
