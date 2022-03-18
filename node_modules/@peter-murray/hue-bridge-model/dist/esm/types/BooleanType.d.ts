import { BaseType, BooleanTypeConfig } from './BaseType';
export declare class BooleanType extends BaseType<boolean> {
    constructor(config: BooleanTypeConfig);
    getValue(val: any): boolean;
}
