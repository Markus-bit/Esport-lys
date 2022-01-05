"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const BridgeTime_1 = require("./BridgeTime");
const HueTime_1 = require("./HueTime");
const HueBridgeModelError_1 = require("../HueBridgeModelError");
const timeUtil_1 = require("./timeUtil");
class Timer extends BridgeTime_1.BridgeTime {
    constructor(value) {
        super();
        this.time = new HueTime_1.HueTime();
        if (value) {
            this.value = value;
        }
    }
    static matches(value) {
        return timeUtil_1.TIMER_REGEX.test(value);
    }
    set value(value) {
        if (value instanceof Timer) {
            this.value = value.toString();
        }
        else {
            const parsed = timeUtil_1.TIMER_REGEX.exec(value);
            if (parsed) {
                // @ts-ignore
                this.time.hours = parsed.groups.hours;
                // @ts-ignore
                this.time.minutes = parsed.groups.minutes;
                // @ts-ignore
                this.time.seconds = parsed.groups.seconds;
            }
            else {
                throw new HueBridgeModelError_1.HueBridgeModelError(`Cannot create a Timer from ${value}`);
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
    toString() {
        return `PT${this.time.toString()}`;
    }
}
exports.Timer = Timer;
