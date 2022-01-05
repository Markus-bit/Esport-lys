import { BaseType, NullableTypeValue } from './BaseType';
import { ListTypeConfig } from './BaseType';
export declare class ListType<T> extends BaseType<T[]> {
    readonly minEntries: number;
    readonly maxEntries?: number;
    readonly entryType: BaseType<T>;
    constructor(config: ListTypeConfig<T>);
    getValue(val: any): NullableTypeValue<T[]>;
    _convertToType(val: any): NullableTypeValue<T[]>;
}
