import { BaseType } from './BaseType';
import { StringTypeConfig } from './BaseType';
export declare class StringType extends BaseType<string> {
    readonly minLength?: number;
    readonly maxLength?: number;
    constructor(config: StringTypeConfig);
    getValue(value: any): string | null;
    _convertToType(val: any): string;
}
