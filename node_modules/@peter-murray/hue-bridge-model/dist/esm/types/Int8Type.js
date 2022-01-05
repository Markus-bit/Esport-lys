import { RangedNumberType } from './RangedNumberType';
const INT8_DEFAULTS = {
    type: 'int8',
    typeMin: -255,
    typeMax: 255
};
export class Int8Type extends RangedNumberType {
    constructor(config) {
        super({ ...config, ...INT8_DEFAULTS });
    }
    _convertToType(val) {
        return parseInt(val);
    }
}
