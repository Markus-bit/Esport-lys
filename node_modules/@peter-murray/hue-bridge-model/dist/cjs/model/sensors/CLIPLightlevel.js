"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIPLightlevel = void 0;
const CLIPSensor_1 = require("./CLIPSensor");
const types_1 = require("../../types");
const CONFIG_ATTRIBUTES = [
    new types_1.UInt16Type({ name: 'tholddark', defaultValue: 16000 }),
    new types_1.UInt16Type({ name: 'tholdoffset', min: 1, defaultValue: 7000 }),
];
const STATE_ATTRIBUTES = [
    new types_1.UInt16Type({ name: 'lightlevel' }),
    new types_1.BooleanType({ name: 'dark' }),
    new types_1.BooleanType({ name: 'daylight' }),
];
class CLIPLightlevel extends CLIPSensor_1.CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get tholddark() {
        return this.getConfigAttributeValue('tholddark');
    }
    set tholddark(value) {
        this._updateConfigAttributeValue('tholddark', value);
    }
    get thresholdDark() {
        return this.tholddark;
    }
    get tholdoffset() {
        return this.getConfigAttributeValue('tholdoffset');
    }
    set tholdoffset(value) {
        this._updateConfigAttributeValue('tholdoffset', value);
    }
    get thresholdOffset() {
        return this.tholdoffset;
    }
    get lightlevel() {
        return this.getStateAttributeValue('lightlevel');
    }
    set lightlevel(value) {
        this._updateStateAttributeValue('lightlevel', value);
    }
    get dark() {
        return this.getStateAttributeValue('dark');
    }
    set dark(value) {
        this._updateStateAttributeValue('dark', value);
    }
    get daylight() {
        return this.getStateAttributeValue('daylight');
    }
    set daylight(value) {
        this._updateStateAttributeValue('daylight', value);
    }
}
exports.CLIPLightlevel = CLIPLightlevel;
