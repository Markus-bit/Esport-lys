import { UInt8Type } from '../types/UInt8Type';
export declare const ABSOLUTE_TIME_REGEX: RegExp;
export declare const RANDOMIZED_TIME_REGEX: RegExp;
export declare const RANDOMIZED_TIMER_REGEX: RegExp;
export declare const RECURRING_RANDOMIZED_TIME_REGEX: RegExp;
export declare const RECURRING_RANDOMIZED_TIMER_REGEX: RegExp;
export declare const RECURRING_TIME_REGEX: RegExp;
export declare const RECURRING_TIMER_REGEX: RegExp;
export declare const TIME_INTERVAL_REGEX: RegExp;
export declare const TIMER_REGEX: RegExp;
export declare function getTimePattern(name?: string): string;
export declare function getDatePattern(name?: string): string;
export declare enum WEEKDAYS {
    MONDAY = 64,
    TUESDAY = 32,
    WEDNESDAY = 16,
    THURSDAY = 8,
    FRIDAY = 4,
    SATURDAY = 2,
    SUNDAY = 1,
    WEEKDAY = 124,
    WEEKEND = 3,
    ALL = 127
}
export declare const REOCCURRANCE_ATTRIBUTE: UInt8Type;
export declare const WEEKDAY_ATTRIBUTE: UInt8Type;
export declare function isTimePattern(str: string): boolean;
export declare function isRecurring(value: any): boolean;
