export declare function isValueDefined(value: any): boolean;
export declare type NullableTypeValue<T> = T | null;
interface InternalTypeConfig<T> extends TypeConfig<T> {
    type: string;
}
export declare class BaseType<T> {
    readonly name: string;
    readonly type: string;
    readonly defaultValue?: any;
    readonly optional: boolean;
    constructor(config: InternalTypeConfig<T>);
    hasDefaultValue(): boolean;
    getValue(val: any): NullableTypeValue<T>;
    _convertToType(val: any): NullableTypeValue<T>;
}
export interface TypeConfig<T> {
    name: string;
    optional?: boolean;
    defaultValue?: T;
}
export interface BooleanTypeConfig extends TypeConfig<boolean> {
}
export interface ChoiceTypeConfig<T> extends TypeConfig<T> {
    validValues: T[];
}
export interface NumberTypeConfig extends TypeConfig<number> {
    min?: number;
    max?: number;
}
export interface StringTypeConfig extends TypeConfig<string> {
    minLength?: number;
    maxLength?: number;
}
export interface RangedNumberTypeConfig extends NumberTypeConfig {
    typeMin: number;
    typeMax: number;
}
export interface ListTypeConfig<T> extends TypeConfig<T> {
    minEntries: number;
    maxEntries?: number;
    entryType: BaseType<T>;
}
export interface ObjectTypeConfig extends TypeConfig<any> {
    types?: BaseType<any>[];
}
export {};
