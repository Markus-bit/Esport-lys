import { BaseType } from './BaseType';
import { NullableTypeValue, RangedNumberTypeConfig } from './BaseType';
export declare class RangedNumberType extends BaseType<number> {
    readonly min: number;
    readonly max: number;
    constructor(config: RangedNumberTypeConfig);
    getValue(value: any): NullableTypeValue<number>;
    _convertToType(val: any): number;
    isValueInRange(value: number): boolean;
    getRange(): number;
}
