import { BridgeTime, TimeComponentValue } from './BridgeTime';
declare type TimeValue = string | RandomizedTimer;
export declare class RandomizedTimer extends BridgeTime {
    private _time;
    private _random;
    constructor(value?: TimeValue);
    static matches(value: any): boolean;
    set value(value: TimeValue);
    hours(value: TimeComponentValue): this;
    minutes(value: TimeComponentValue): this;
    seconds(value: TimeComponentValue): this;
    randomHours(value: TimeComponentValue): this;
    randomMinutes(value: TimeComponentValue): this;
    randomSeconds(value: TimeComponentValue): this;
    toString(): string;
}
export {};
