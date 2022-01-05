import { RangedNumberType } from './RangedNumberType';
import { NumberTypeConfig } from './BaseType';
export declare class Int16Type extends RangedNumberType {
    constructor(config: NumberTypeConfig);
    _convertToType(val: any): number;
}
