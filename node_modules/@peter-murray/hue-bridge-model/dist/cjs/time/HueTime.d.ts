import { AttributeObject } from '../AttributeObject';
export declare type NumericalValue = number | string;
export declare class HueTime extends AttributeObject {
    constructor(time?: Date | string);
    get hours(): NumericalValue;
    get hoursString(): string;
    set hours(value: NumericalValue);
    get minutes(): NumericalValue;
    get minutesString(): string;
    set minutes(value: NumericalValue);
    get seconds(): NumericalValue;
    get secondsString(): string;
    set seconds(value: NumericalValue);
    toString(): string;
    fromString(value: string): void;
    fromDate(value: Date): void;
}
