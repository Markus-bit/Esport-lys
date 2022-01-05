"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIPGenericStatus = void 0;
const types_1 = require("../../types");
const CLIPSensor_1 = require("./CLIPSensor");
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new types_1.UInt16Type({ name: 'status' }),
];
class CLIPGenericStatus extends CLIPSensor_1.CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get status() {
        return this.getStateAttributeValue('status');
    }
    set status(value) {
        this._updateStateAttributeValue('status', value);
    }
}
exports.CLIPGenericStatus = CLIPGenericStatus;
