"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var cart_actions_1 = require("../../redux/cart/cart.actions");
var cart_selectors_1 = require("../../redux/cart/cart.selectors");
var shopping_bag_svg_1 = require("../../assets/shopping-bag.svg");
require("./cart-icon.styles.scss");
var CartIcon = function (_a) {
    var toggleCartHidden = _a.toggleCartHidden, itemCount = _a.itemCount;
    return (react_1.default.createElement("div", { className: 'cart-icon', onClick: toggleCartHidden },
        react_1.default.createElement(shopping_bag_svg_1.ReactComponent, { className: 'shopping-icon' }),
        react_1.default.createElement("span", { className: 'item-count' }, itemCount)));
};
var mapDispatchToProps = function (dispatch) { return ({
    toggleCartHidden: function () { return dispatch(cart_actions_1.toggleCartHidden()); },
}); };
var mapStateToProps = reselect_1.createStructuredSelector({
    itemCount: cart_selectors_1.selectCartItemsCount,
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CartIcon);
