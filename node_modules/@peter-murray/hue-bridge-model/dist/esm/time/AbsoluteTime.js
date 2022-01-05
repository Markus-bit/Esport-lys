import { ABSOLUTE_TIME_REGEX } from './timeUtil';
import { HueTime } from './HueTime';
import { HueDate } from './HueDate';
import { HueBridgeModelError } from '../HueBridgeModelError';
import { BridgeTime } from './BridgeTime';
export class AbsoluteTime extends BridgeTime {
    constructor(value) {
        super();
        this.time = new HueTime();
        this.date = new HueDate();
        if (value) {
            this.value = value;
        }
    }
    static matches(value) {
        return ABSOLUTE_TIME_REGEX.test(value);
    }
    set value(value) {
        if (value instanceof AbsoluteTime) {
            // Re-enter this function using the string value
            this.value = value.toString();
        }
        else if (value instanceof Date) {
            this.time.fromDate(value);
            this.date.fromDate(value);
        }
        else {
            const parsed = ABSOLUTE_TIME_REGEX.exec(value);
            if (parsed) {
                // @ts-ignore
                this.hours(parsed.groups.hours);
                // @ts-ignore
                this.minutes(parsed.groups.minutes);
                // @ts-ignore
                this.seconds(parsed.groups.seconds);
                // @ts-ignore
                this.year(parsed.groups.year);
                // @ts-ignore
                this.month(parsed.groups.month);
                // @ts-ignore
                this.day(parsed.groups.day);
            }
            else {
                throw new HueBridgeModelError(`Cannot create an absolute time from ${value}`);
            }
        }
    }
    year(value) {
        this.date.year = value;
        return this;
    }
    month(value) {
        this.date.month = value;
        return this;
    }
    day(value) {
        this.date.day = value;
        return this;
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
    toString() {
        return `${this.date.toString()}T${this.time.toString()}`;
    }
}
