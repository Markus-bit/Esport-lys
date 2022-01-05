"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIPTemperature = void 0;
const types_1 = require("../../types");
const CLIPSensor_1 = require("./CLIPSensor");
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new types_1.UInt16Type({ name: 'temperature' }),
];
class CLIPTemperature extends CLIPSensor_1.CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get temperature() {
        return this.getStateAttributeValue('temperature');
    }
    set temperature(value) {
        this._updateStateAttributeValue('temperature', value);
    }
}
exports.CLIPTemperature = CLIPTemperature;
