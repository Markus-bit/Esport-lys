"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZLLSwitch = void 0;
const types_1 = require("../../types");
const Sensor_1 = require("./Sensor");
const CONFIG_ATTRIBUTES = [
    new types_1.BooleanType({ name: 'reachable' }),
    new types_1.UInt8Type({ name: 'battery' }),
    new types_1.ChoiceType({ name: 'alert', validValues: ['none', 'select', 'lselect'], defaultValue: 'none' }),
    new types_1.ListType({ name: 'pending', entryType: new types_1.StringType({ name: 'pendingChange' }), minEntries: 0 })
];
const STATE_ATTRIBUTES = [
    new types_1.Int16Type({ name: 'buttonevent' }),
];
// Hue Dimmer Switch
class ZLLSwitch extends Sensor_1.Sensor {
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
    get pending() {
        return this.getConfigAttributeValue('pending');
    }
    get buttonevent() {
        return this.getStateAttributeValue('buttonevent');
    }
}
exports.ZLLSwitch = ZLLSwitch;
