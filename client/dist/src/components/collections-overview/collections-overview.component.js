"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var collection_preview_component_1 = __importDefault(require("../collection-preview/collection-preview.component"));
var shop_selectors_1 = require("../../redux/shop/shop.selectors");
var collections_overview_styles_1 = require("./collections-overview.styles");
var CollectionsOverview = function (_a) {
    var collections = _a.collections;
    return (react_1.default.createElement(collections_overview_styles_1.CollectionsOverviewContainer, null, collections.map(function (_a) {
        var id = _a.id, otherCollectionProps = __rest(_a, ["id"]);
        return (react_1.default.createElement(collection_preview_component_1.default, __assign({ key: id }, otherCollectionProps)));
    })));
};
var mapStateToProps = reselect_1.createStructuredSelector({
    collections: shop_selectors_1.selectCollectionsForPreview,
});
exports.default = react_redux_1.connect(mapStateToProps)(CollectionsOverview);
