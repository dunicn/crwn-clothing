"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveButtonContainer = exports.QuantityContainer = exports.TextContainer = exports.ImageContainer = exports.CheckoutItemContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.CheckoutItemContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    min-height: 100px;\n    border-bottom: 1px solid darkgrey;\n    padding: 15px 0;\n    font-size: 20px;\n    align-items: center;\n\n    @media screen and (max-width: 800px) {\n        font-size: 18px;\n    }\n"], ["\n    width: 100%;\n    display: flex;\n    min-height: 100px;\n    border-bottom: 1px solid darkgrey;\n    padding: 15px 0;\n    font-size: 20px;\n    align-items: center;\n\n    @media screen and (max-width: 800px) {\n        font-size: 18px;\n    }\n"])));
exports.ImageContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 23%;\n    padding-right: 15px;\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n"], ["\n    width: 23%;\n    padding-right: 15px;\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n"])));
exports.TextContainer = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 23%;\n\n    @media screen and (max-width: 800px) {\n        width: 22%;\n    }\n"], ["\n    width: 23%;\n\n    @media screen and (max-width: 800px) {\n        width: 22%;\n    }\n"])));
exports.QuantityContainer = styled_components_1.default(exports.TextContainer)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n\n    span {\n        margin: 0 10px;\n    }\n\n    div {\n        cursor: pointer;\n    }\n"], ["\n    display: flex;\n\n    span {\n        margin: 0 10px;\n    }\n\n    div {\n        cursor: pointer;\n    }\n"])));
exports.RemoveButtonContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    padding-left: 12px;\n    cursor: pointer;\n"], ["\n    padding-left: 12px;\n    cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
