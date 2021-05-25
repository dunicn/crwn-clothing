"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var spinner_styles_1 = require("./spinner.styles");
var Spinner = function () { return (react_1.default.createElement(spinner_styles_1.SpinnerOverlay, null,
    react_1.default.createElement(spinner_styles_1.SpinnerContainer, null))); };
exports.default = Spinner;
