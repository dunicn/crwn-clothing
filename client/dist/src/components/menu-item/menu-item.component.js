"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var menu_item_styles_1 = require("./menu-item.styles");
var MenuItem = function (props) { return (react_1.default.createElement(menu_item_styles_1.MenuItemContainer, { size: props.size, onClick: function () { return props.history.push("" + props.match.url + props.linkUrl); } },
    react_1.default.createElement(menu_item_styles_1.BackgroundImageContainer, { className: 'background-image', imageUrl: props.imageUrl }),
    react_1.default.createElement(menu_item_styles_1.ContentContainer, { className: 'content' },
        react_1.default.createElement(menu_item_styles_1.ContentTitle, null, props.title.toUpperCase()),
        react_1.default.createElement(menu_item_styles_1.ContentSubtitle, null, "SHOP NOW")))); };
exports.default = react_router_dom_1.withRouter(MenuItem);
