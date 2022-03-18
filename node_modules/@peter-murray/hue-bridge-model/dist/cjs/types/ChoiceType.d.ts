import { BaseType, ChoiceTypeConfig } from './BaseType';
export declare class ChoiceType<T> extends BaseType<T> {
    validValues: T[];
    constructor(config: ChoiceTypeConfig<T>);
    _convertToType(val: T): T;
}
