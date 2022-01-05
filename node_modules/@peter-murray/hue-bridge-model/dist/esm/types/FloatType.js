import { RangedNumberType } from './RangedNumberType';
const FLOAT_DEFAULTS = {
    type: 'float',
    typeMin: -Number.MAX_VALUE,
    typeMax: Number.MAX_VALUE
};
export class FloatType extends RangedNumberType {
    constructor(config) {
        super({ ...config, ...FLOAT_DEFAULTS });
    }
    _convertToType(val) {
        return parseFloat(val);
    }
}
