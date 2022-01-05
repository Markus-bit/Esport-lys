"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Int8Type = void 0;
const RangedNumberType_1 = require("./RangedNumberType");
const INT8_DEFAULTS = {
    type: 'int8',
    typeMin: -255,
    typeMax: 255
};
class Int8Type extends RangedNumberType_1.RangedNumberType {
    constructor(config) {
        super({ ...config, ...INT8_DEFAULTS });
    }
    _convertToType(val) {
        return parseInt(val);
    }
}
exports.Int8Type = Int8Type;
