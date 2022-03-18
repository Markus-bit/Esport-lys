"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFromString = exports.RecurringRandomizedTimer = exports.RandomizedTimer = exports.RecurringTimer = exports.RecurringRandomizedTime = exports.RandomizedTime = exports.TimeInterval = exports.Timer = exports.RecurringTime = exports.AbsoluteTime = exports.WEEKDAYS = exports.isTimePattern = exports.isRecurring = void 0;
const timeUtil_1 = require("./time/timeUtil");
const AbsoluteTime_1 = require("./time/AbsoluteTime");
Object.defineProperty(exports, "AbsoluteTime", { enumerable: true, get: function () { return AbsoluteTime_1.AbsoluteTime; } });
const RecurringTime_1 = require("./time/RecurringTime");
Object.defineProperty(exports, "RecurringTime", { enumerable: true, get: function () { return RecurringTime_1.RecurringTime; } });
const Timer_1 = require("./time/Timer");
Object.defineProperty(exports, "Timer", { enumerable: true, get: function () { return Timer_1.Timer; } });
const TimeInterval_1 = require("./time/TimeInterval");
Object.defineProperty(exports, "TimeInterval", { enumerable: true, get: function () { return TimeInterval_1.TimeInterval; } });
const RandomizedTime_1 = require("./time/RandomizedTime");
Object.defineProperty(exports, "RandomizedTime", { enumerable: true, get: function () { return RandomizedTime_1.RandomizedTime; } });
const RecurringRandomizedTime_1 = require("./time/RecurringRandomizedTime");
Object.defineProperty(exports, "RecurringRandomizedTime", { enumerable: true, get: function () { return RecurringRandomizedTime_1.RecurringRandomizedTime; } });
const RecurringTimer_1 = require("./time/RecurringTimer");
Object.defineProperty(exports, "RecurringTimer", { enumerable: true, get: function () { return RecurringTimer_1.RecurringTimer; } });
const RandomizedTimer_1 = require("./time/RandomizedTimer");
Object.defineProperty(exports, "RandomizedTimer", { enumerable: true, get: function () { return RandomizedTimer_1.RandomizedTimer; } });
const RecurringRandomizedTimer_1 = require("./time/RecurringRandomizedTimer");
Object.defineProperty(exports, "RecurringRandomizedTimer", { enumerable: true, get: function () { return RecurringRandomizedTimer_1.RecurringRandomizedTimer; } });
const HueBridgeModelError_1 = require("./HueBridgeModelError");
var timeUtil_2 = require("./time/timeUtil");
Object.defineProperty(exports, "isRecurring", { enumerable: true, get: function () { return timeUtil_2.isRecurring; } });
Object.defineProperty(exports, "isTimePattern", { enumerable: true, get: function () { return timeUtil_2.isTimePattern; } });
Object.defineProperty(exports, "WEEKDAYS", { enumerable: true, get: function () { return timeUtil_2.WEEKDAYS; } });
function createFromString(str) {
    if (timeUtil_1.ABSOLUTE_TIME_REGEX.test(str)) {
        return new AbsoluteTime_1.AbsoluteTime(str);
    }
    else if (timeUtil_1.RECURRING_TIME_REGEX.test(str)) {
        return new RecurringTime_1.RecurringTime(str);
    }
    else if (timeUtil_1.TIMER_REGEX.test(str)) {
        return new Timer_1.Timer(str);
    }
    else if (timeUtil_1.TIME_INTERVAL_REGEX.test(str)) {
        return new TimeInterval_1.TimeInterval(str);
    }
    else if (timeUtil_1.RANDOMIZED_TIME_REGEX.test(str)) {
        return new RandomizedTime_1.RandomizedTime(str);
    }
    else if (timeUtil_1.RECURRING_RANDOMIZED_TIME_REGEX.test(str)) {
        return new RecurringRandomizedTime_1.RecurringRandomizedTime(str);
    }
    else if (timeUtil_1.RECURRING_TIMER_REGEX.test(str)) {
        return new RecurringTimer_1.RecurringTimer(str);
    }
    else if (timeUtil_1.RANDOMIZED_TIMER_REGEX.test(str)) {
        return new RandomizedTimer_1.RandomizedTimer(str);
    }
    else if (timeUtil_1.RECURRING_RANDOMIZED_TIMER_REGEX.test(str)) {
        return new RecurringRandomizedTimer_1.RecurringRandomizedTimer(str);
    }
    else {
        throw new HueBridgeModelError_1.HueBridgeModelError(`Unable to determine a valid time pattern for string: "${str}"`);
    }
}
exports.createFromString = createFromString;
