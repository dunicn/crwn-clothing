"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCartFromFirebase = exports.checkOutSuccess = exports.UpdateCartInFirebase = exports.clearCart = exports.clearItemFromCart = exports.removeItem = exports.addItem = exports.toggleCartHidden = void 0;
var cart_types_1 = __importDefault(require("./cart.types"));
var toggleCartHidden = function () { return ({
    type: cart_types_1.default.TOGGLE_CART_HIDDEN,
}); };
exports.toggleCartHidden = toggleCartHidden;
var addItem = function (item) { return ({
    type: cart_types_1.default.ADD_ITEM,
    payload: item,
}); };
exports.addItem = addItem;
var removeItem = function (item) { return ({
    type: cart_types_1.default.REMOVE_ITEM,
    payload: item,
}); };
exports.removeItem = removeItem;
var clearItemFromCart = function (item) { return ({
    type: cart_types_1.default.CLEAR_ITEM_FROM_CART,
    payload: item,
}); };
exports.clearItemFromCart = clearItemFromCart;
var clearCart = function () { return ({
    type: cart_types_1.default.CLEAR_CART,
}); };
exports.clearCart = clearCart;
var UpdateCartInFirebase = function () { return ({
    type: cart_types_1.default.UPDATE_CART_IN_FIREBASE,
}); };
exports.UpdateCartInFirebase = UpdateCartInFirebase;
var checkOutSuccess = function () { return ({
    type: cart_types_1.default.CLEAR_CART,
}); };
exports.checkOutSuccess = checkOutSuccess;
var setCartFromFirebase = function (cartItems) { return ({
    type: cart_types_1.default.SET_CART_FROM_FIREBASE,
    payload: cartItems,
}); };
exports.setCartFromFirebase = setCartFromFirebase;
