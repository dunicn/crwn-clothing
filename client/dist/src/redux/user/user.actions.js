"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpFailure = exports.signUpSuccess = exports.signUpStart = exports.signOutFailure = exports.signOutSuccess = exports.signOutStart = exports.checkUserSession = exports.signInFailure = exports.signInSuccess = exports.emailSignInStart = exports.googleSignInStart = void 0;
var user_types_1 = __importDefault(require("./user.types"));
var googleSignInStart = function () { return ({
    type: user_types_1.default.GOOGLE_SIGN_IN_START,
}); };
exports.googleSignInStart = googleSignInStart;
var emailSignInStart = function (emailAndPassword) { return ({
    type: user_types_1.default.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
}); };
exports.emailSignInStart = emailSignInStart;
var signInSuccess = function (user) { return ({
    type: user_types_1.default.SIGN_IN_SUCCESS,
    payload: user,
}); };
exports.signInSuccess = signInSuccess;
var signInFailure = function (error) { return ({
    type: user_types_1.default.SIGN_IN_FAILURE,
    payload: error,
}); };
exports.signInFailure = signInFailure;
var checkUserSession = function () { return ({
    type: user_types_1.default.CHECK_USER_SESSION,
}); };
exports.checkUserSession = checkUserSession;
var signOutStart = function () { return ({
    type: user_types_1.default.SIGN_OUT_START,
}); };
exports.signOutStart = signOutStart;
var signOutSuccess = function () { return ({
    type: user_types_1.default.SIGN_OUT_SUCCESS,
}); };
exports.signOutSuccess = signOutSuccess;
var signOutFailure = function (error) { return ({
    type: user_types_1.default.SIGN_OUT_FAILURE,
    payload: error,
}); };
exports.signOutFailure = signOutFailure;
var signUpStart = function (userCredentials) { return ({
    type: user_types_1.default.SIGN_UP_START,
    payload: userCredentials,
}); };
exports.signUpStart = signUpStart;
var signUpSuccess = function (_a) {
    var user = _a.user, additionalData = _a.additionalData;
    return ({
        type: user_types_1.default.SIGN_UP_SUCCESS,
        payload: { user: user, additionalData: additionalData },
    });
};
exports.signUpSuccess = signUpSuccess;
var signUpFailure = function (error) { return ({
    type: user_types_1.default.SIGN_UP_FAILURE,
    payload: error,
}); };
exports.signUpFailure = signUpFailure;
