import { BridgeTime, TimeComponentValue } from './BridgeTime';
declare type TimeValue = string | RandomizedTime | Date;
export declare class RandomizedTime extends BridgeTime {
    private date;
    private time;
    private random;
    constructor(value?: TimeValue);
    static matches(value: any): boolean;
    set value(value: TimeValue);
    year(value: TimeComponentValue): this;
    month(value: TimeComponentValue): this;
    day(value: TimeComponentValue): this;
    hours(value: TimeComponentValue): this;
    minutes(value: TimeComponentValue): this;
    seconds(value: TimeComponentValue): this;
    randomHours(value: TimeComponentValue): this;
    randomMinutes(value: TimeComponentValue): this;
    randomSeconds(value: TimeComponentValue): this;
    toString(): string;
}
export {};
