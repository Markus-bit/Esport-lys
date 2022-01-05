import { RangedNumberType } from './RangedNumberType';
import { NumberTypeConfig } from './BaseType';
export declare class FloatType extends RangedNumberType {
    constructor(config: NumberTypeConfig);
    _convertToType(val: any): number;
}
