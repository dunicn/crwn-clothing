"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectDirectorySections = void 0;
var reselect_1 = require("reselect");
var selectDirectory = function (state) { return state.directory; };
exports.selectDirectorySections = reselect_1.createSelector([selectDirectory], function (directory) { return directory.sections; });
