import { BridgeTime, TimeComponentValue } from './BridgeTime';
declare type TimeValue = string | RecurringRandomizedTimer;
export declare class RecurringRandomizedTimer extends BridgeTime {
    private readonly time;
    private readonly random;
    private reocurrance;
    constructor(value?: TimeValue);
    static matches(value: any): boolean;
    set value(value: TimeValue);
    hours(value: TimeComponentValue): this;
    minutes(value: TimeComponentValue): this;
    seconds(value: TimeComponentValue): this;
    randomHours(value: TimeComponentValue): this;
    randomMinutes(value: TimeComponentValue): this;
    randomSeconds(value: TimeComponentValue): this;
    reoccurs(value?: TimeComponentValue): this;
    toString(): string;
}
export {};
