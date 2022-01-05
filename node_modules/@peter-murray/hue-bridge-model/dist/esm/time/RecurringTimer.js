import { BridgeTime } from './BridgeTime';
import { HueTime } from './HueTime';
import { RECURRING_TIMER_REGEX, REOCCURRANCE_ATTRIBUTE } from './timeUtil';
import { HueBridgeModelError } from '../HueBridgeModelError';
export class RecurringTimer extends BridgeTime {
    constructor(value) {
        super();
        this.time = new HueTime();
        this.reoccurance = 0;
        if (value) {
            this.value = value;
        }
    }
    static matches(value) {
        return RECURRING_TIMER_REGEX.test(value);
    }
    set value(value) {
        if (value instanceof RecurringTimer) {
            // Use the string value and re-enter this function
            this.value = value.toString();
        }
        else if (value instanceof Date) {
            this.time.fromDate(value);
        }
        else {
            const parsed = RECURRING_TIMER_REGEX.exec(value);
            if (parsed) {
                // @ts-ignore
                this.time.hours = parsed.groups.hours;
                // @ts-ignore
                this.time.minutes = parsed.groups.minutes;
                // @ts-ignore
                this.time.seconds = parsed.groups.seconds;
                // @ts-ignore
                this.reoccurs(parsed.groups.times.length === 0 ? 0 : parsed.groups.times);
            }
            else {
                throw new HueBridgeModelError(`Cannnot create a Timer from ${value}`);
            }
        }
    }
    hours(value) {
        this.time.hours = value;
        return this;
    }
    minutes(value) {
        this.time.minutes = value;
        return this;
    }
    seconds(value) {
        this.time.seconds = value;
        return this;
    }
    reoccurs(value) {
        // @ts-ignore
        this.reoccurance = REOCCURRANCE_ATTRIBUTE.getValue(value);
        return this;
    }
    toString() {
        let limit = '';
        const reoccurs = this.reoccurance;
        if (reoccurs !== 0) {
            limit = `${reoccurs}`.padStart(2, '0');
        }
        return `R${limit}/PT${this.time.toString()}`;
    }
}
