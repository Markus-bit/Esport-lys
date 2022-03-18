"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIPHumidity = void 0;
const types_1 = require("../../types");
const CLIPSensor_1 = require("./CLIPSensor");
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new types_1.UInt16Type({ name: 'humidity' }),
];
class CLIPHumidity extends CLIPSensor_1.CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get humidity() {
        return this.getStateAttributeValue('humidity');
    }
    set humidity(value) {
        //TODO	Current humidity 0.01% steps (e.g. 2000 is 20%)The bridge does not enforce range/resolution.
        this._updateStateAttributeValue('humidity', value);
    }
}
exports.CLIPHumidity = CLIPHumidity;
