"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomizedTime = void 0;
const BridgeTime_1 = require("./BridgeTime");
const timeUtil_1 = require("./timeUtil");
const HueTime_1 = require("./HueTime");
const HueDate_1 = require("./HueDate");
const HueBridgeModelError_1 = require("../HueBridgeModelError");
class RandomizedTime extends BridgeTime_1.BridgeTime {
    constructor(value) {
        super();
        this.date = new HueDate_1.HueDate();
        this.time = new HueTime_1.HueTime();
        this.random = new HueTime_1.HueTime();
        this.time = new HueTime_1.HueTime();
        this.date = new HueDate_1.HueDate();
        this.random = new HueTime_1.HueTime();
        if (value) {
            this.value = value;
        }
    }
    static matches(value) {
        return timeUtil_1.RANDOMIZED_TIME_REGEX.test(value);
    }
    set value(value) {
        if (value instanceof RandomizedTime) {
            // Re-enter this function using string value
            this.value = value.toString();
        }
        else if (value instanceof Date) {
            this.time.fromDate(value);
            this.date.fromDate(value);
            this.random = new HueTime_1.HueTime();
        }
        else {
            const parsed = timeUtil_1.RANDOMIZED_TIME_REGEX.exec(value);
            if (parsed) {
                const time = this.time;
                // @ts-ignore
                time.hours = parsed.groups.hours;
                // @ts-ignore
                time.minutes = parsed.groups.minutes;
                // @ts-ignore
                time.seconds = parsed.groups.seconds;
                const date = this.date;
                // @ts-ignore
                date.year = parsed.groups.year;
                // @ts-ignore
                date.month = parsed.groups.month;
                // @ts-ignore
                date.day = parsed.groups.day;
                const random = this.random;
                // @ts-ignore
                random.hours = parsed.groups.randomhours;
                // @ts-ignore
                random.minutes = parsed.groups.randomminutes;
                // @ts-ignore
                random.seconds = parsed.groups.randomseconds;
            }
            else {
                throw new HueBridgeModelError_1.HueBridgeModelError(`Cannot create a randomized time from ${value}`);
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
    randomHours(value) {
        this.random.hours = value;
        return this;
    }
    randomMinutes(value) {
        this.random.minutes = value;
        return this;
    }
    randomSeconds(value) {
        this.random.seconds = value;
        return this;
    }
    toString() {
        return `${this.date.toString()}T${this.time.toString()}A${this.random.toString()}`;
    }
}
exports.RandomizedTime = RandomizedTime;
;
