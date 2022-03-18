"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UInt8Type = void 0;
const RangedNumberType_1 = require("./RangedNumberType");
const UINT8_DEFAULTS = {
    type: 'uint8',
    typeMin: 0,
    typeMax: 255
};
class UInt8Type extends RangedNumberType_1.RangedNumberType {
    constructor(config) {
        super({ ...config, ...UINT8_DEFAULTS });
    }
    _convertToType(val) {
        return parseInt(val);
    }
}
exports.UInt8Type = UInt8Type;
