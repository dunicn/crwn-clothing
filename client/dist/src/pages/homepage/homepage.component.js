"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var directory_component_1 = __importDefault(require("../../components/directory/directory.component"));
var homepage_styles_1 = require("./homepage.styles");
var HomePage = function () { return (react_1.default.createElement(homepage_styles_1.HomePageContainer, null,
    react_1.default.createElement(directory_component_1.default, null))); };
exports.default = HomePage;
