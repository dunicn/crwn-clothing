"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorImageText = exports.ErrorImageContainer = exports.ErrorImageOverlay = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ErrorImageOverlay = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
exports.ErrorImageContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"], ["\n  display: inline-block;\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"])), function (_a) {
    var imageUrl = _a.imageUrl;
    return "url(" + imageUrl + ")";
});
exports.ErrorImageText = styled_components_1.default.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 28px;\n  color: #2f8e89;\n"], ["\n  font-size: 28px;\n  color: #2f8e89;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
