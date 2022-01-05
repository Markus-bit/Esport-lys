"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringRandomizedTime = void 0;
const timeUtil_1 = require("./timeUtil");
const RecurringTime_1 = require("./RecurringTime");
const HueTime_1 = require("./HueTime");
const HueBridgeModelError_1 = require("../HueBridgeModelError");
class RecurringRandomizedTime extends RecurringTime_1.RecurringTime {
    constructor(...args) {
        super();
        this._random = new HueTime_1.HueTime();
        if (arguments.length > 0) {
            this.setValue(...arguments);
        }
    }
    static matches(value) {
        return timeUtil_1.RECURRING_RANDOMIZED_TIME_REGEX.test(value);
    }
    setValue(...args) {
        // This is all a little convoluted due to large number of parameters it supports, could do with some work on making
        // it clearer as to the path (although tests do provide coverage).
        let weekdays = null, date = null;
        if (arguments.length > 1) {
            weekdays = arguments[0];
            date = arguments[1];
        }
        else if (arguments.length === 1) {
            const argOne = arguments[0];
            if (argOne instanceof RecurringRandomizedTime) {
                return this.setValue(argOne.toString());
            }
            else if (argOne instanceof Date) {
                date = argOne;
            }
            else if (Number.isInteger(argOne)) {
                weekdays = argOne;
            }
        }
        if (date) {
            this._time.fromDate(date);
        }
        if (weekdays) {
            this.weekdays(weekdays);
        }
        const parsed = timeUtil_1.RECURRING_RANDOMIZED_TIME_REGEX.exec(arguments[0]);
        if (parsed) {
            const time = this._time;
            // @ts-ignore
            time.hours = parsed.groups.hours;
            // @ts-ignore
            time.minutes = parsed.groups.minutes;
            // @ts-ignore
            time.seconds = parsed.groups.seconds;
            // @ts-ignore
            this.weekdays(parsed.groups.weekdays);
            const random = this._random;
            // @ts-ignore
            random.hours = parsed.groups.randomhours;
            // @ts-ignore
            random.minutes = parsed.groups.randomminutes;
            // @ts-ignore
            random.seconds = parsed.groups.randomseconds;
            return this;
        }
        if (!weekdays && !date) {
            const values = Array.from(arguments).join(', ');
            throw new HueBridgeModelError_1.HueBridgeModelError(`Cannot create an recurring time from ${values}`);
        }
        return this;
    }
    randomHours(value) {
        this._random.hours = value;
        return this;
    }
    randomMinutes(value) {
        this._random.minutes = value;
        return this;
    }
    randomSeconds(value) {
        this._random.seconds = value;
        return this;
    }
    toString() {
        return `${super.toString()}A${this._random.toString()}`;
    }
}
exports.RecurringRandomizedTime = RecurringRandomizedTime;
