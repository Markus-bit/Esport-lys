"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIPPresence = void 0;
const types_1 = require("../../types");
const CLIPSensor_1 = require("./CLIPSensor");
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new types_1.BooleanType({ name: 'presence' }),
];
class CLIPPresence extends CLIPSensor_1.CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get presence() {
        return this.getStateAttributeValue('presence');
    }
    set presence(value) {
        this._updateStateAttributeValue('presence', value);
    }
}
exports.CLIPPresence = CLIPPresence;
