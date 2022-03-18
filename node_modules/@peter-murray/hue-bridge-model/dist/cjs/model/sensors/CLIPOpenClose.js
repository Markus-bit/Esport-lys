"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIPOpenClose = void 0;
const CLIPSensor_1 = require("./CLIPSensor");
const types_1 = require("../../types");
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new types_1.BooleanType({ name: 'open' })
];
class CLIPOpenClose extends CLIPSensor_1.CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get open() {
        return this.getStateAttributeValue('open');
    }
    set open(value) {
        this._updateStateAttributeValue('open', value);
    }
}
exports.CLIPOpenClose = CLIPOpenClose;
