import { BridgeTime, TimeComponentValue } from './BridgeTime';
declare type TimeValue = string | Date | AbsoluteTime;
export declare class AbsoluteTime extends BridgeTime {
    private time;
    private date;
    constructor(value?: TimeValue);
    static matches(value: any): boolean;
    set value(value: TimeValue);
    year(value: TimeComponentValue): AbsoluteTime;
    month(value: TimeComponentValue): AbsoluteTime;
    day(value: TimeComponentValue): AbsoluteTime;
    hours(value: TimeComponentValue): AbsoluteTime;
    minutes(value: TimeComponentValue): AbsoluteTime;
    seconds(value: TimeComponentValue): AbsoluteTime;
    toString(): string;
}
export {};
