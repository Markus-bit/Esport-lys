"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIPGenericFlag = void 0;
const CLIPSensor_1 = require("./CLIPSensor");
const types_1 = require("../../types");
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new types_1.BooleanType({ name: 'flag' }),
];
class CLIPGenericFlag extends CLIPSensor_1.CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get flag() {
        return this.getStateAttributeValue('flag');
    }
    set flag(value) {
        this._updateStateAttributeValue('flag', value);
    }
}
exports.CLIPGenericFlag = CLIPGenericFlag;
