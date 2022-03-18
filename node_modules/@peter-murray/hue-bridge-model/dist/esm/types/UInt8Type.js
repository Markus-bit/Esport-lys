import { RangedNumberType } from './RangedNumberType';
const UINT8_DEFAULTS = {
    type: 'uint8',
    typeMin: 0,
    typeMax: 255
};
export class UInt8Type extends RangedNumberType {
    constructor(config) {
        super({ ...config, ...UINT8_DEFAULTS });
    }
    _convertToType(val) {
        return parseInt(val);
    }
}
