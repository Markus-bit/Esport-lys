import { RecurringTime } from './RecurringTime';
import { TimeComponentValue } from './BridgeTime';
export declare class RecurringRandomizedTime extends RecurringTime {
    private readonly _random;
    constructor(...args: any[]);
    static matches(value: any): boolean;
    setValue(...args: any[]): RecurringRandomizedTime;
    randomHours(value: TimeComponentValue): this;
    randomMinutes(value: TimeComponentValue): this;
    randomSeconds(value: TimeComponentValue): this;
    toString(): string;
}
