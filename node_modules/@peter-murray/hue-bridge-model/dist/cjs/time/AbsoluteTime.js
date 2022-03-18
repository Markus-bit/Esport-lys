"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsoluteTime = void 0;
const timeUtil_1 = require("./timeUtil");
const HueTime_1 = require("./HueTime");
const HueDate_1 = require("./HueDate");
const HueBridgeModelError_1 = require("../HueBridgeModelError");
const BridgeTime_1 = require("./BridgeTime");
class AbsoluteTime extends BridgeTime_1.BridgeTime {
    constructor(value) {
        super();
        this.time = new HueTime_1.HueTime();
        this.date = new HueDate_1.HueDate();
        if (value) {
            this.value = value;
        }
    }
    static matches(value) {
        return timeUtil_1.ABSOLUTE_TIME_REGEX.test(value);
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
            const parsed = timeUtil_1.ABSOLUTE_TIME_REGEX.exec(value);
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
                throw new HueBridgeModelError_1.HueBridgeModelError(`Cannot create an absolute time from ${value}`);
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
exports.AbsoluteTime = AbsoluteTime;
