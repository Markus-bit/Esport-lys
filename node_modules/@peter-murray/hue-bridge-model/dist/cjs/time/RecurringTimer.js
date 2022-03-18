"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringTimer = void 0;
const BridgeTime_1 = require("./BridgeTime");
const HueTime_1 = require("./HueTime");
const timeUtil_1 = require("./timeUtil");
const HueBridgeModelError_1 = require("../HueBridgeModelError");
class RecurringTimer extends BridgeTime_1.BridgeTime {
    constructor(value) {
        super();
        this.time = new HueTime_1.HueTime();
        this.reoccurance = 0;
        if (value) {
            this.value = value;
        }
    }
    static matches(value) {
        return timeUtil_1.RECURRING_TIMER_REGEX.test(value);
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
            const parsed = timeUtil_1.RECURRING_TIMER_REGEX.exec(value);
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
                throw new HueBridgeModelError_1.HueBridgeModelError(`Cannnot create a Timer from ${value}`);
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
        this.reoccurance = timeUtil_1.REOCCURRANCE_ATTRIBUTE.getValue(value);
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
exports.RecurringTimer = RecurringTimer;
