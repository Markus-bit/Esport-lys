"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeInterval = void 0;
const HueTime_1 = require("./HueTime");
const BridgeTime_1 = require("./BridgeTime");
const timeUtil_1 = require("./timeUtil");
const HueBridgeModelError_1 = require("../HueBridgeModelError");
class TimeInterval extends BridgeTime_1.BridgeTime {
    constructor(...args) {
        super();
        this._from = new HueTime_1.HueTime();
        this._to = new HueTime_1.HueTime();
        this._weekdays = timeUtil_1.WEEKDAYS.ALL;
        if (arguments.length > 0) {
            this.setValue(...arguments);
        }
    }
    static matches(value) {
        return timeUtil_1.TIME_INTERVAL_REGEX.test(value);
    }
    setValue(...args) {
        const argOne = arguments[0];
        if (argOne instanceof TimeInterval) {
            return this.setValue(argOne.toString());
        }
        else {
            const parsed = timeUtil_1.TIME_INTERVAL_REGEX.exec(arguments[0]);
            if (parsed) {
                // @ts-ignore
                this._from.hours = parsed.groups.fromhours;
                // @ts-ignore
                this._from.minutes = parsed.groups.fromminutes;
                // @ts-ignore
                this._from.seconds = parsed.groups.fromseconds;
                // @ts-ignore
                this._to.hours = parsed.groups.tohours;
                // @ts-ignore
                this._to.minutes = parsed.groups.tominutes;
                // @ts-ignore
                this._to.seconds = parsed.groups.toseconds;
                // @ts-ignore
                this.weekdays(parsed.groups.weekdays);
            }
            else {
                const args = Array.from(arguments).join(', ');
                throw new HueBridgeModelError_1.HueBridgeModelError(`Cannot create a TimeInterval from ${args}`);
            }
        }
    }
    get weekdaysString() {
        return `${this._weekdays}`.padStart(3, '0');
    }
    weekdays(value) {
        // @ts-ignore
        this._weekdays = timeUtil_1.WEEKDAY_ATTRIBUTE.getValue(value);
        return this;
    }
    from(date) {
        this._from.fromDate(date);
        return this;
    }
    fromHours(value) {
        this._from.hours = value;
        return this;
    }
    fromMinutes(value) {
        this._from.minutes = value;
        return this;
    }
    fromSeconds(value) {
        this._from.seconds = value;
        return this;
    }
    to(date) {
        this._to.fromDate(date);
        return this;
    }
    toHours(value) {
        this._to.hours = value;
        return this;
    }
    toMinutes(value) {
        this._to.minutes = value;
        return this;
    }
    toSeconds(value) {
        this._to.seconds = value;
        return this;
    }
    toString() {
        return `W${this.weekdaysString}/T${this._from.toString()}/T${this._to.toString()}`;
    }
}
exports.TimeInterval = TimeInterval;
