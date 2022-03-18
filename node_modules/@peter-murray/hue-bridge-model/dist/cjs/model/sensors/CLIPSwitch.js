"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIPSwitch = void 0;
const CLIPSensor_1 = require("./CLIPSensor");
const types_1 = require("../../types");
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new types_1.UInt16Type({ name: 'buttonevent' }),
];
class CLIPSwitch extends CLIPSensor_1.CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get buttonevent() {
        return this.getStateAttributeValue('buttonevent');
    }
    set buttonevent(value) {
        this._updateStateAttributeValue('buttonevent', value);
    }
}
exports.CLIPSwitch = CLIPSwitch;
