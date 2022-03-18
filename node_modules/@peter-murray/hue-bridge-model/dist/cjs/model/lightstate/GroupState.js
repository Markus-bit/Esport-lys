"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupState = void 0;
const CommonStates_1 = require("./CommonStates");
class GroupState extends CommonStates_1.CommonStates {
    constructor() {
        super(['scene']);
    }
    scene(value) {
        return this._setStateValue('scene', value);
    }
}
exports.GroupState = GroupState;
