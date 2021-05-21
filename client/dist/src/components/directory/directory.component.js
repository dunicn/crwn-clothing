"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var directory_selectors_1 = require("../../redux/directory/directory.selectors");
var menu_item_component_1 = __importDefault(require("../menu-item/menu-item.component"));
require("./directory.styles.scss");
var Directory = function (_a) {
    var sections = _a.sections;
    return (react_1.default.createElement("div", { className: 'directory-menu' }, sections.map(function (_a) {
        var id = _a.id, otherSectionProps = __rest(_a, ["id"]);
        return (react_1.default.createElement(menu_item_component_1.default, __assign({ key: id }, otherSectionProps)));
    })));
};
var mapStateToProps = reselect_1.createStructuredSelector({
    sections: directory_selectors_1.selectDirectorySections,
});
exports.default = react_redux_1.connect(mapStateToProps)(Directory);
