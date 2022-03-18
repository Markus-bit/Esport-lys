"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoFence = void 0;
const types_1 = require("../../types");
const Sensor_1 = require("./Sensor");
const CONFIG_ATTRIBUTES = [
    new types_1.BooleanType({ name: 'reachable' }),
], STATE_ATTRIBUTES = [
    new types_1.BooleanType({ name: 'presence' })
];
class GeoFence extends Sensor_1.Sensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get presence() {
        return this.getStateAttributeValue('presence');
    }
}
exports.GeoFence = GeoFence;
