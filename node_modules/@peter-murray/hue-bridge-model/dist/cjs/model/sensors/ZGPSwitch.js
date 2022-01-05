"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZGPSwitch = void 0;
const types_1 = require("../../types");
const Sensor_1 = require("./Sensor");
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new types_1.UInt16Type({ name: 'buttonevent' })
];
// Hue Tap Switch - Zigbee Green Power Switch
class ZGPSwitch extends Sensor_1.Sensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get buttonevent() {
        return this.getStateAttributeValue('buttonevent');
    }
}
exports.ZGPSwitch = ZGPSwitch;
