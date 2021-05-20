"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCartTotal = exports.selectCartItemsCount = exports.selectCartHidden = exports.selectCartItems = void 0;
var reselect_1 = require("reselect");
var selectCart = function (state) { return state.cart; };
exports.selectCartItems = reselect_1.createSelector([selectCart], function (cart) { return cart.cartItems; });
exports.selectCartHidden = reselect_1.createSelector([selectCart], function (cart) { return cart.hidden; });
exports.selectCartItemsCount = reselect_1.createSelector([exports.selectCartItems], function (cartItems) {
    return cartItems.reduce(function (accumulatedQuantity, cartItem) {
        return accumulatedQuantity + cartItem.quantity;
    }, 0);
});
exports.selectCartTotal = reselect_1.createSelector([exports.selectCartItems], function (cartItems) {
    return cartItems.reduce(function (accumulatedQuantity, cartItem) {
        return accumulatedQuantity + cartItem.quantity * cartItem.price;
    }, 0);
});
