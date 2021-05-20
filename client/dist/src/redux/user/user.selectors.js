"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCurrentUser = void 0;
var reselect_1 = require("reselect");
var selectUser = function (state) { return state.user; };
exports.selectCurrentUser = reselect_1.createSelector([selectUser], function (user) { return user.currentUser; });
