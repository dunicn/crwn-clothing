"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var menu_item_styles_1 = require("./menu-item.styles");
var MenuItem = function (_a) {
    var title = _a.title, imageUrl = _a.imageUrl, size = _a.size, history = _a.history, linkUrl = _a.linkUrl, match = _a.match;
    return (react_1.default.createElement(menu_item_styles_1.MenuItemContainer, { size: size, onClick: function () { return history.push("" + match.url + linkUrl); } },
        react_1.default.createElement(menu_item_styles_1.BackgroundImageContainer, { className: 'background-image', imageUrl: imageUrl }),
        react_1.default.createElement(menu_item_styles_1.ContentContainer, { className: 'content' },
            react_1.default.createElement(menu_item_styles_1.ContentTitle, null, title.toUpperCase()),
            react_1.default.createElement(menu_item_styles_1.ContentSubtitle, null, "SHOP NOW"))));
};
exports.default = react_router_dom_1.withRouter(MenuItem);
