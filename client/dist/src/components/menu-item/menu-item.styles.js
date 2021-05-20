"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentSubtitle = exports.ContentTitle = exports.ContentContainer = exports.BackgroundImageContainer = exports.MenuItemContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.MenuItemContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  min-width: 30%;\n  overflow: hidden;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  margin: 0 7.5px 15px;\n  overflow: hidden;\n\n  &:hover {\n    cursor: pointer;\n\n    & .background-image {\n      transform: scale(1.1);\n      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n    }\n\n    & .content {\n      opacity: 0.9;\n    }\n  }\n\n  &:first-child {\n    margin-right: 7.5px;\n  }\n\n  &:last-child {\n    margin-left: 7.5px;\n  }\n\n  @media screen and (max-width: 800px) {\n    height: 200px;\n  }\n"], ["\n  height: ", ";\n  min-width: 30%;\n  overflow: hidden;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  margin: 0 7.5px 15px;\n  overflow: hidden;\n\n  &:hover {\n    cursor: pointer;\n\n    & .background-image {\n      transform: scale(1.1);\n      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n    }\n\n    & .content {\n      opacity: 0.9;\n    }\n  }\n\n  &:first-child {\n    margin-right: 7.5px;\n  }\n\n  &:last-child {\n    margin-left: 7.5px;\n  }\n\n  @media screen and (max-width: 800px) {\n    height: 200px;\n  }\n"])), function (_a) {
    var size = _a.size;
    return (size ? '380px' : '240px');
});
exports.BackgroundImageContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ", ";\n"])), function (_a) {
    var imageUrl = _a.imageUrl;
    return "url(" + imageUrl + ")";
});
exports.ContentContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n"], ["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n"])));
exports.ContentTitle = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n"], ["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n"])));
exports.ContentSubtitle = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: lighter;\n  font-size: 16px;\n"], ["\n  font-weight: lighter;\n  font-size: 16px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
