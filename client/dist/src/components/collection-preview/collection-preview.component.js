"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var collection_item_component_1 = __importDefault(require("../collection-item/collection-item.component"));
var collection_preview_styles_1 = require("./collection-preview.styles");
var CollectionPreview = function (_a) {
    var title = _a.title, items = _a.items, history = _a.history, match = _a.match, routeName = _a.routeName;
    return (react_1.default.createElement(collection_preview_styles_1.CollectionPreviewContainer, null,
        react_1.default.createElement(collection_preview_styles_1.TitleContainer, { onClick: function () { return history.push(match.path + "/" + routeName); } }, title.toUpperCase()),
        react_1.default.createElement(collection_preview_styles_1.PreviewContainer, null, items
            .filter(function (item, idx) { return idx < 4; })
            .map(function (item) { return (react_1.default.createElement(collection_item_component_1.default, { key: item.id, item: item })); }))));
};
exports.default = react_router_dom_1.withRouter(CollectionPreview);
