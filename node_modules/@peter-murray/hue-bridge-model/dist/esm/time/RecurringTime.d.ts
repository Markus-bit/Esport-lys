import { BridgeTime, TimeComponentValue } from './BridgeTime';
import { HueTime } from './HueTime';
export declare class RecurringTime extends BridgeTime {
    protected _time: HueTime;
    protected _weekdays?: number;
    constructor(...args: any[]);
    static matches(value: any): boolean;
    setValue(...argsValue: any[]): RecurringTime;
    get weekdaysString(): string;
    weekdays(value: number): this;
    hours(value: TimeComponentValue): this;
    minutes(value: TimeComponentValue): this;
    seconds(value: TimeComponentValue): this;
    toString(): string;
}
