import { BridgeTime, TimeComponentValue } from './BridgeTime';
export declare class TimeInterval extends BridgeTime {
    private _from;
    private _to;
    private _weekdays;
    constructor(...args: any[]);
    static matches(value: any): boolean;
    setValue(...args: any[]): void;
    get weekdaysString(): string;
    weekdays(value: TimeComponentValue): this;
    from(date: Date): this;
    fromHours(value: TimeComponentValue): this;
    fromMinutes(value: TimeComponentValue): this;
    fromSeconds(value: TimeComponentValue): this;
    to(date: Date): this;
    toHours(value: TimeComponentValue): this;
    toMinutes(value: TimeComponentValue): this;
    toSeconds(value: TimeComponentValue): this;
    toString(): string;
}
