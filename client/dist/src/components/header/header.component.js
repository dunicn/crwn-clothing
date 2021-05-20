"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var cart_icon_component_1 = __importDefault(require("../cart-icon/cart-icon.component"));
var cart_dropdown_component_1 = __importDefault(require("../cart-dropdown/cart-dropdown.component"));
var cart_selectors_1 = require("../../redux/cart/cart.selectors");
var user_selectors_1 = require("../../redux/user/user.selectors");
var user_actions_1 = require("../../redux/user/user.actions");
var crown_svg_1 = require("../../assets/crown.svg");
var header_styles_1 = require("./header.styles");
var Header = function (_a) {
    var currentUser = _a.currentUser, hidden = _a.hidden, signOutStart = _a.signOutStart;
    return (react_1.default.createElement(header_styles_1.HeaderContainer, null,
        react_1.default.createElement(header_styles_1.LogoContainer, { to: '/' },
            react_1.default.createElement(crown_svg_1.ReactComponent, { className: 'logo' })),
        react_1.default.createElement(header_styles_1.OptionsContainer, null,
            react_1.default.createElement(header_styles_1.OptionLink, { to: '/shop' }, "SHOP"),
            react_1.default.createElement(header_styles_1.OptionLink, { to: '/shop' }, "CONTACT"),
            currentUser ? (react_1.default.createElement(header_styles_1.OptionLink, { as: 'div', onClick: signOutStart }, "SIGN OUT")) : (react_1.default.createElement(header_styles_1.OptionLink, { to: '/signin' }, "SIGN IN")),
            react_1.default.createElement(cart_icon_component_1.default, null)),
        hidden ? null : react_1.default.createElement(cart_dropdown_component_1.default, null)));
};
var mapStateToProps = reselect_1.createStructuredSelector({
    currentUser: user_selectors_1.selectCurrentUser,
    hidden: cart_selectors_1.selectCartHidden,
});
var mapDispatchToProps = function (dispatch) { return ({
    signOutStart: function () { return dispatch(user_actions_1.signOutStart()); },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Header);
