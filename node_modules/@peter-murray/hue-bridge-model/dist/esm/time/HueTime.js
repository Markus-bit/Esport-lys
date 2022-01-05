import { getTimePattern } from './timeUtil';
import { HueBridgeModelError } from '../HueBridgeModelError';
import { AttributeObject } from '../AttributeObject';
import { UInt8Type } from '../types/UInt8Type';
const ATTRIBUTES = [
    new UInt8Type({ name: 'hours', min: 0, max: 23 }),
    new UInt8Type({ name: 'minutes', min: 0, max: 59 }),
    new UInt8Type({ name: 'seconds', min: 0, max: 59 }),
];
const TIME_REGEX = new RegExp(getTimePattern());
export class HueTime extends AttributeObject {
    constructor(time) {
        super(ATTRIBUTES);
        if (time instanceof Date) {
            this.fromDate(time);
        }
        else {
            this.fromString(time || '00:00:00');
        }
    }
    get hours() {
        return this.getAttributeValue('hours');
    }
    get hoursString() {
        return `${this.hours}`.padStart(2, '0');
    }
    set hours(value) {
        this.setAttributeValue('hours', value);
    }
    get minutes() {
        return this.getAttributeValue('minutes');
    }
    get minutesString() {
        return `${this.minutes}`.padStart(2, '0');
    }
    set minutes(value) {
        this.setAttributeValue('minutes', value);
    }
    get seconds() {
        return this.getAttributeValue('seconds');
    }
    get secondsString() {
        return `${this.seconds}`.padStart(2, '0');
    }
    set seconds(value) {
        this.setAttributeValue('seconds', value);
    }
    toString() {
        return `${this.hoursString}:${this.minutesString}:${this.secondsString}`;
    }
    fromString(value) {
        const parsed = TIME_REGEX.exec(value);
        if (parsed) {
            // @ts-ignore
            this.hours = parsed.groups.hours;
            // @ts-ignore
            this.minutes = parsed.groups.minutes;
            // @ts-ignore
            this.seconds = parsed.groups.seconds;
        }
        else {
            throw new HueBridgeModelError(`Invalid time format string "${value}"`);
        }
    }
    fromDate(value) {
        this.hours = value.getUTCHours();
        this.minutes = value.getMinutes();
        this.seconds = value.getSeconds();
    }
}
;
