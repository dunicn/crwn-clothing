"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionLink = exports.OptionsContainer = exports.LogoContainer = exports.HeaderContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_router_dom_1 = require("react-router-dom");
exports.HeaderContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"], ["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"])));
exports.LogoContainer = styled_components_1.default(react_router_dom_1.Link)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"], ["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"])));
exports.OptionsContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"], ["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"])));
exports.OptionLink = styled_components_1.default(react_router_dom_1.Link)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px 15px;\n  cursor: pointer;\n"], ["\n  padding: 10px 15px;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
