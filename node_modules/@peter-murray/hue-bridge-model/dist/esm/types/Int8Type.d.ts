import { RangedNumberType } from './RangedNumberType';
import { NumberTypeConfig } from './BaseType';
export declare class Int8Type extends RangedNumberType {
    constructor(config: NumberTypeConfig);
    _convertToType(val: any): number;
}
