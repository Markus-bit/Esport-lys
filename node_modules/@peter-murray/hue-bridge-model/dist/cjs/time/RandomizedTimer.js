"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomizedTimer = void 0;
const BridgeTime_1 = require("./BridgeTime");
const HueTime_1 = require("./HueTime");
const timeUtil_1 = require("./timeUtil");
const HueBridgeModelError_1 = require("../HueBridgeModelError");
class RandomizedTimer extends BridgeTime_1.BridgeTime {
    constructor(value) {
        super();
        this._time = new HueTime_1.HueTime();
        this._random = new HueTime_1.HueTime();
        if (value) {
            this.value = value;
        }
    }
    static matches(value) {
        return timeUtil_1.RANDOMIZED_TIMER_REGEX.test(value);
    }
    set value(value) {
        if (value instanceof RandomizedTimer) {
            // Re-enter this function using the string value
            this.value = value.toString();
        }
        else {
            const parsed = timeUtil_1.RANDOMIZED_TIMER_REGEX.exec(value);
            if (parsed) {
                const time = this._time;
                // @ts-ignore
                time.hours = parsed.groups.hours;
                // @ts-ignore
                time.minutes = parsed.groups.minutes;
                // @ts-ignore
                time.seconds = parsed.groups.seconds;
                const random = this._random;
                // @ts-ignore
                random.hours = parsed.groups.randomhours;
                // @ts-ignore
                random.minutes = parsed.groups.randomminutes;
                // @ts-ignore
                random.seconds = parsed.groups.randomseconds;
            }
            else {
                throw new HueBridgeModelError_1.HueBridgeModelError(`Cannot create a RandomizedTimer from ${value}`);
            }
        }
    }
    hours(value) {
        this._time.hours = value;
        return this;
    }
    minutes(value) {
        this._time.minutes = value;
        return this;
    }
    seconds(value) {
        this._time.seconds = value;
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
        return `PT${this._time.toString()}A${this._random.toString()}`;
    }
}
exports.RandomizedTimer = RandomizedTimer;
