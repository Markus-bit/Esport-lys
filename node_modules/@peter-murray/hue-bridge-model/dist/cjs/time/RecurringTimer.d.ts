import { BridgeTime, TimeComponentValue } from './BridgeTime';
declare type TimeValue = RecurringTimer | Date | string;
export declare class RecurringTimer extends BridgeTime {
    private time;
    private reoccurance;
    constructor(value?: TimeValue);
    static matches(value: any): boolean;
    set value(value: TimeValue);
    hours(value: TimeComponentValue): this;
    minutes(value: TimeComponentValue): this;
    seconds(value: TimeComponentValue): this;
    reoccurs(value?: number): this;
    toString(): string;
}
export {};
