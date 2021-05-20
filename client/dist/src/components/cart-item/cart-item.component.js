"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./cart-item.styles.scss");
var CartItem = function (_a) {
    var item = _a.item;
    return (react_1.default.createElement("div", { className: 'cart-item' },
        react_1.default.createElement("img", { src: item.imageUrl, alt: 'item' }),
        react_1.default.createElement("div", { className: 'item-details' },
            react_1.default.createElement("span", { className: 'name' }),
            react_1.default.createElement("span", { className: 'price' },
                ' ',
                item.quantity,
                " x $",
                item.price))));
};
exports.default = react_1.default.memo(CartItem);
