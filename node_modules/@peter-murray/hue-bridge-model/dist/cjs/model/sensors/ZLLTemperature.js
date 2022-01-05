"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZLLTemperature = void 0;
const types_1 = require("../../types");
const Sensor_1 = require("./Sensor");
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new types_1.Int16Type({ name: 'temperature' }),
];
class ZLLTemperature extends Sensor_1.Sensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get temperature() {
        return this.getStateAttributeValue('temperature');
    }
}
exports.ZLLTemperature = ZLLTemperature;
