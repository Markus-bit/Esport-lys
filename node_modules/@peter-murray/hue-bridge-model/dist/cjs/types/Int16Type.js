"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Int16Type = void 0;
const RangedNumberType_1 = require("./RangedNumberType");
const INT16_DEFAULTS = {
    type: 'int16',
    typeMin: -65535,
    typeMax: 65535
};
class Int16Type extends RangedNumberType_1.RangedNumberType {
    constructor(config) {
        super({ ...config, ...INT16_DEFAULTS });
    }
    _convertToType(val) {
        return parseInt(val);
    }
}
exports.Int16Type = Int16Type;
