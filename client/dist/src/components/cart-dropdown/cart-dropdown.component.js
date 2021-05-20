"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var react_router_dom_1 = require("react-router-dom");
var custom_button_component_1 = __importDefault(require("../custom-button/custom-button.component"));
var cart_item_component_1 = __importDefault(require("../cart-item/cart-item.component"));
var cart_selectors_1 = require("../../redux/cart/cart.selectors");
var cart_actions_1 = require("../../redux/cart/cart.actions");
require("./cart-dropdown.styles.scss");
var CartDropdown = function (_a) {
    var cartItems = _a.cartItems, history = _a.history, dispatch = _a.dispatch;
    return (react_1.default.createElement("div", { className: 'cart-dropdown' },
        react_1.default.createElement("div", { className: 'cart-items' }, cartItems.length ? (cartItems.map(function (cartItem) { return (react_1.default.createElement(cart_item_component_1.default, { key: cartItem.id, item: cartItem })); })) : (react_1.default.createElement("span", { className: 'empty-message' }, "Your cart is empty"))),
        react_1.default.createElement(custom_button_component_1.default, { onClick: function () {
                history.push('/checkout');
                dispatch(cart_actions_1.toggleCartHidden());
            } }, "GO TO CHECKOUT")));
};
var mapStateToProps = reselect_1.createStructuredSelector({
    cartItems: cart_selectors_1.selectCartItems,
});
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps)(CartDropdown));
