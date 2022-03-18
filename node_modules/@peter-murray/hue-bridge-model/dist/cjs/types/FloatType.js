"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatType = void 0;
const RangedNumberType_1 = require("./RangedNumberType");
const FLOAT_DEFAULTS = {
    type: 'float',
    typeMin: -Number.MAX_VALUE,
    typeMax: Number.MAX_VALUE
};
class FloatType extends RangedNumberType_1.RangedNumberType {
    constructor(config) {
        super({ ...config, ...FLOAT_DEFAULTS });
    }
    _convertToType(val) {
        return parseFloat(val);
    }
}
exports.FloatType = FloatType;
