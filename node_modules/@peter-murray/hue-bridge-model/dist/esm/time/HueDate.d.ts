import { AttributeObject } from '../AttributeObject';
export declare type NumericalValue = number | string;
export declare class HueDate extends AttributeObject {
    constructor(value?: Date | string);
    get year(): NumericalValue;
    get yearString(): string;
    set year(value: NumericalValue);
    get month(): NumericalValue;
    get monthString(): string;
    /**
     * Sets the Month for the Date.
     * @param value {number | string} If a number, it is a 1 based index on the month number (1 === Jan), otherwise as a String the name of the month.
     * @returns {BridgeObject}
     */
    set month(value: NumericalValue);
    get day(): NumericalValue;
    get dayString(): string;
    set day(value: NumericalValue);
    toString(): string;
    fromString(value?: string): HueDate;
    fromDate(value: Date): HueDate;
}
