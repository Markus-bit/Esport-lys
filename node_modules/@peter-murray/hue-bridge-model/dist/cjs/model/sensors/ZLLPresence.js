"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZLLPresence = void 0;
const types_1 = require("../../types");
const Sensor_1 = require("./Sensor");
const CONFIG_ATTRIBUTES = [
    new types_1.UInt8Type({ name: 'battery' }),
    new types_1.ChoiceType({ name: 'alert', validValues: ['none', 'select', 'lselect'], defaultValue: 'none' }),
    new types_1.BooleanType({ name: 'reachable' }),
    new types_1.UInt16Type({ name: 'sensitivity' }),
    new types_1.UInt16Type({ name: 'sensitivitymax' }),
];
const STATE_ATTRIBUTES = [
    new types_1.BooleanType({ name: 'presence' }),
];
// Hue Motion Sensor
class ZLLPresence extends Sensor_1.Sensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get battery() {
        return this.getConfigAttributeValue('battery');
    }
    set battery(value) {
        this._updateConfigAttributeValue('battery', value);
    }
    get alert() {
        return this.getConfigAttributeValue('alert');
    }
    set alert(value) {
        this._updateConfigAttributeValue('alert', value);
    }
    get reachable() {
        return this.getConfigAttributeValue('reachable');
    }
    set reachable(value) {
        this._updateConfigAttributeValue('reachable', value);
    }
    get sensitivity() {
        return this.getConfigAttributeValue('sensitivity');
    }
    set sensitivity(value) {
        this._updateConfigAttributeValue('sensitivity', value);
    }
    get sensitivitymax() {
        return this.getConfigAttributeValue('sensitivitymax');
    }
    set sensitivitymax(value) {
        this._updateConfigAttributeValue('sensitivitymax', value);
    }
    get presence() {
        return this.getStateAttributeValue('presence');
    }
}
exports.ZLLPresence = ZLLPresence;
