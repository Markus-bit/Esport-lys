"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UInt16Type = void 0;
const RangedNumberType_1 = require("./RangedNumberType");
const UINT16_DEFAULTS = {
    type: 'uint16',
    typeMin: 0,
    typeMax: 65535
};
class UInt16Type extends RangedNumberType_1.RangedNumberType {
    constructor(config) {
        super({ ...config, ...UINT16_DEFAULTS });
    }
    _convertToType(val) {
        return parseInt(val);
    }
}
exports.UInt16Type = UInt16Type;
