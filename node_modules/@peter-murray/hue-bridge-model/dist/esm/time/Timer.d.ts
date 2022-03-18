import { BridgeTime, TimeComponentValue } from './BridgeTime';
declare type TimeValue = Timer | string;
export declare class Timer extends BridgeTime {
    private time;
    constructor(value?: TimeValue);
    static matches(value: any): boolean;
    set value(value: TimeValue);
    hours(value: TimeComponentValue): this;
    minutes(value: TimeComponentValue): this;
    seconds(value: TimeComponentValue): this;
    toString(): string;
}
export {};
