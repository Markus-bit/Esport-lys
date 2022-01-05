"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRecurring = exports.isTimePattern = exports.WEEKDAY_ATTRIBUTE = exports.REOCCURRANCE_ATTRIBUTE = exports.WEEKDAYS = exports.getDatePattern = exports.getTimePattern = exports.TIMER_REGEX = exports.TIME_INTERVAL_REGEX = exports.RECURRING_TIMER_REGEX = exports.RECURRING_TIME_REGEX = exports.RECURRING_RANDOMIZED_TIMER_REGEX = exports.RECURRING_RANDOMIZED_TIME_REGEX = exports.RANDOMIZED_TIMER_REGEX = exports.RANDOMIZED_TIME_REGEX = exports.ABSOLUTE_TIME_REGEX = void 0;
const UInt8Type_1 = require("../types/UInt8Type");
const BridgeTime_1 = require("./BridgeTime");
exports.ABSOLUTE_TIME_REGEX = new RegExp(`${getDatePattern()}T${getTimePattern()}`);
exports.RANDOMIZED_TIME_REGEX = new RegExp(`^${getDatePattern()}T${getTimePattern()}A${getTimePattern('random')}$`);
exports.RANDOMIZED_TIMER_REGEX = new RegExp(`^PT${getTimePattern()}A${getTimePattern('random')}$`);
exports.RECURRING_RANDOMIZED_TIME_REGEX = new RegExp(`^W(?<weekdays>[0-9]{3})/T${getTimePattern()}A${getTimePattern('random')}$`);
exports.RECURRING_RANDOMIZED_TIMER_REGEX = new RegExp(`^R(?<times>[0-9]{0,2})/PT${getTimePattern()}A${getTimePattern('random')}$`);
exports.RECURRING_TIME_REGEX = new RegExp(`^W(?<weekdays>[0-9]{3})/T${getTimePattern()}$`);
exports.RECURRING_TIMER_REGEX = new RegExp(`^R(?<times>[0-9]{0,2})/PT${getTimePattern()}$`);
exports.TIME_INTERVAL_REGEX = new RegExp(`^W(?<weekdays>[0-9]{3})/T${getTimePattern('from')}/T${getTimePattern('to')}$`);
exports.TIMER_REGEX = new RegExp(`^PT${getTimePattern()}$`);
function getTimePattern(name) {
    const two_digits = '[0-9]{2}', prefix = name || '';
    return `(?<${prefix}hours>${two_digits}):(?<${prefix}minutes>${two_digits}):(?<${prefix}seconds>${two_digits})`;
}
exports.getTimePattern = getTimePattern;
function getDatePattern(name) {
    const two_digits = '[0-9]{2}', four_digits = '[0-9]{4}', prefix = name || '';
    return `(?<${prefix}year>${four_digits})-(?<${prefix}month>${two_digits})-(?<${prefix}day>${two_digits})`;
}
exports.getDatePattern = getDatePattern;
var WEEKDAYS;
(function (WEEKDAYS) {
    WEEKDAYS[WEEKDAYS["MONDAY"] = 64] = "MONDAY";
    WEEKDAYS[WEEKDAYS["TUESDAY"] = 32] = "TUESDAY";
    WEEKDAYS[WEEKDAYS["WEDNESDAY"] = 16] = "WEDNESDAY";
    WEEKDAYS[WEEKDAYS["THURSDAY"] = 8] = "THURSDAY";
    WEEKDAYS[WEEKDAYS["FRIDAY"] = 4] = "FRIDAY";
    WEEKDAYS[WEEKDAYS["SATURDAY"] = 2] = "SATURDAY";
    WEEKDAYS[WEEKDAYS["SUNDAY"] = 1] = "SUNDAY";
    WEEKDAYS[WEEKDAYS["WEEKDAY"] = 124] = "WEEKDAY";
    WEEKDAYS[WEEKDAYS["WEEKEND"] = 3] = "WEEKEND";
    WEEKDAYS[WEEKDAYS["ALL"] = 127] = "ALL";
})(WEEKDAYS = exports.WEEKDAYS || (exports.WEEKDAYS = {}));
exports.REOCCURRANCE_ATTRIBUTE = new UInt8Type_1.UInt8Type({
    name: 'reoccurs',
    min: 0,
    max: 99,
    defaultValue: 0,
    optional: true
});
exports.WEEKDAY_ATTRIBUTE = new UInt8Type_1.UInt8Type({
    name: 'weekdays',
    min: 1,
    max: WEEKDAYS.ALL
});
function isTimePattern(str) {
    return exports.ABSOLUTE_TIME_REGEX.test(str)
        || exports.RECURRING_TIME_REGEX.test(str)
        || exports.RANDOMIZED_TIME_REGEX.test(str)
        || exports.RECURRING_RANDOMIZED_TIME_REGEX.test(str)
        || exports.TIMER_REGEX.test(str)
        || exports.RECURRING_TIMER_REGEX.test(str)
        || exports.RANDOMIZED_TIMER_REGEX.test(str)
        || exports.RECURRING_RANDOMIZED_TIMER_REGEX.test(str);
}
exports.isTimePattern = isTimePattern;
function isRecurring(value) {
    let valueToTest;
    if (value instanceof BridgeTime_1.BridgeTime) {
        valueToTest = value.toString();
    }
    else {
        valueToTest = value;
    }
    return exports.RECURRING_TIME_REGEX.test(valueToTest)
        || exports.RECURRING_RANDOMIZED_TIME_REGEX.test(valueToTest)
        || exports.RECURRING_TIMER_REGEX.test(valueToTest)
        || exports.RECURRING_RANDOMIZED_TIMER_REGEX.test(valueToTest);
}
exports.isRecurring = isRecurring;
