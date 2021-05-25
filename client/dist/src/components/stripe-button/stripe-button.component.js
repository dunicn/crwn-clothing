"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_stripe_checkout_1 = __importDefault(require("react-stripe-checkout"));
var axios_1 = __importDefault(require("axios"));
var react_redux_1 = require("react-redux");
var cart_actions_1 = require("../../redux/cart/cart.actions");
var StripeCheckoutButton = function (_a) {
    var price = _a.price, checkOutSuccess = _a.checkOutSuccess;
    var priceForStripe = price * 100;
    var publishableKey = 'pk_test_51IMT4fGJgT6Ofa14GZSFWvvQk8Ip6bgIhTeTbZQSvtFeVEf9VZ7anvAMDbE6IsBTOEKSurGj0n3W9ULEi9IlEqhj00AI9wE1dZ';
    var onToken = function (token) {
        axios_1.default({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token,
            },
        })
            .then(function (response) {
            alert('Payment successful');
            checkOutSuccess();
        })
            .catch(function (error) {
            console.log('Payment error: ', error.response);
            alert('There was an issue with your payment. Please sure you use the provided credit card.');
        });
    };
    return (react_1.default.createElement(react_stripe_checkout_1.default, { label: 'Pay Now', name: 'CRWN Clothing Ltd.', billingAddress: true, shippingAddress: true, image: 'http://svgshare.com/i/CUz.svg', description: "Your total is $" + price, amount: priceForStripe, panelLabel: 'Pay Now', token: onToken, stripeKey: publishableKey }));
};
var mapDispatchToProps = function (dispatch) { return ({
    checkOutSuccess: function () { return dispatch(cart_actions_1.checkOutSuccess()); },
}); };
exports.default = react_redux_1.connect(null, mapDispatchToProps)(StripeCheckoutButton);
