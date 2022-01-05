import { RangedNumberType } from './RangedNumberType';
const INT16_DEFAULTS = {
    type: 'int16',
    typeMin: -65535,
    typeMax: 65535
};
export class Int16Type extends RangedNumberType {
    constructor(config) {
        super({ ...config, ...INT16_DEFAULTS });
    }
    _convertToType(val) {
        return parseInt(val);
    }
}
