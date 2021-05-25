"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var error_boundary_styles_1 = require("./error-boundary.styles");
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ErrorBoundary;
}(react_1.default.Component));
 > {
    constructor: function () {
        _this = _super.call(this) || this;
        this.state = {
            hasErrored: false,
        };
    },
    getDerivedStateFromError: function (error) {
        return { hasErrored: true };
    },
    componentDidCatch: function (error, info) {
        console.log(error);
    },
    render: function () {
        if (this.state.hasErrored) {
            return (react_1.default.createElement(error_boundary_styles_1.ErrorImageOverlay, null,
                react_1.default.createElement(error_boundary_styles_1.ErrorImageContainer, { imageUrl: 'https://i.imgur.com/g3hgqe8.png' }),
                react_1.default.createElement(error_boundary_styles_1.ErrorImageText, null, "This Page is Broken")));
        }
        return this.props.children;
    }
};
exports.default = ErrorBoundary;
