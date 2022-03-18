import { RangedNumberType } from './RangedNumberType';
const UINT16_DEFAULTS = {
    type: 'uint16',
    typeMin: 0,
    typeMax: 65535
};
export class UInt16Type extends RangedNumberType {
    constructor(config) {
        super({ ...config, ...UINT16_DEFAULTS });
    }
    _convertToType(val) {
        return parseInt(val);
    }
}
