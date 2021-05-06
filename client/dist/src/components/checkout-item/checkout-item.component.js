"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var cart_actions_1 = require("../../redux/cart/cart.actions");
var checkout_item_styles_1 = require("./checkout-item.styles");
var CheckoutItem = function (_a) {
    var cartItem = _a.cartItem, clearItem = _a.clearItem, addItem = _a.addItem, removeItem = _a.removeItem;
    var name = cartItem.name, imageUrl = cartItem.imageUrl, price = cartItem.price, quantity = cartItem.quantity;
    return (react_1.default.createElement(checkout_item_styles_1.CheckoutItemContainer, null,
        react_1.default.createElement(checkout_item_styles_1.ImageContainer, null,
            react_1.default.createElement("img", { src: imageUrl, alt: 'item' })),
        react_1.default.createElement(checkout_item_styles_1.TextContainer, null, name),
        react_1.default.createElement(checkout_item_styles_1.QuantityContainer, null,
            react_1.default.createElement("div", { onClick: function () { return removeItem(cartItem); } }, "\u276E"),
            react_1.default.createElement("span", null, quantity),
            react_1.default.createElement("div", { onClick: function () { return addItem(cartItem); } }, "\u276F")),
        react_1.default.createElement(checkout_item_styles_1.TextContainer, null, price),
        react_1.default.createElement(checkout_item_styles_1.RemoveButtonContainer, { onClick: function () { return clearItem(cartItem); } }, "\u2715")));
};
var mapDispatchToProps = function (dispatch) { return ({
    clearItem: function (item) { return dispatch(cart_actions_1.clearItemFromCart(item)); },
    addItem: function (item) { return dispatch(cart_actions_1.addItem(item)); },
    removeItem: function (item) { return dispatch(cart_actions_1.removeItem(item)); },
}); };
exports.default = react_redux_1.connect(null, mapDispatchToProps)(CheckoutItem);
