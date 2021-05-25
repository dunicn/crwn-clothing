"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var sign_in_component_1 = __importDefault(require("../../components/sign-in/sign-in.component"));
var sign_up_component_1 = __importDefault(require("../../components/sign-up/sign-up.component"));
require("./sign-in-and-sign-up.styles.scss");
var SignInAndSignUpPage = function () { return (react_1.default.createElement("div", { className: 'sign-in-and-sign-up' },
    react_1.default.createElement(sign_in_component_1.default, null),
    react_1.default.createElement(sign_up_component_1.default, null))); };
exports.default = SignInAndSignUpPage;
