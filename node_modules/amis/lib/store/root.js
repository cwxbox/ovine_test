"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootStore = void 0;
var tslib_1 = require("tslib");
var mobx_state_tree_1 = require("mobx-state-tree");
var qs_1 = tslib_1.__importDefault(require("qs"));
var helper_1 = require("../utils/helper");
var service_1 = require("./service");
exports.RootStore = service_1.ServiceStore.named('RootStore')
    .props({
    runtimeError: mobx_state_tree_1.types.frozen(),
    runtimeErrorStack: mobx_state_tree_1.types.frozen(),
    query: mobx_state_tree_1.types.frozen()
})
    .views(function (self) { return ({
    get downStream() {
        return self.query
            ? helper_1.createObject(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, (self.data && self.data.__super ? self.data.__super : null)), self.query), { __query: self.query }), self.data)
            : self.data;
    }
}); })
    .actions(function (self) { return ({
    setRuntimeError: function (error, errorStack) {
        self.runtimeError = error;
        self.runtimeErrorStack = errorStack;
    },
    updateLocation: function (location) {
        var query = (location && location.query) ||
            (location &&
                location.search &&
                qs_1.default.parse(location.search.substring(1))) ||
            (window.location.search &&
                qs_1.default.parse(window.location.search.substring(1)));
        self.query = query;
    }
}); });
//# sourceMappingURL=./store/root.js.map
