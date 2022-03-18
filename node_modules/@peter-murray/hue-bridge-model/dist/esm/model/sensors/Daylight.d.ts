import { Sensor } from './Sensor';
export declare class Daylight extends Sensor {
    constructor(id: number | string);
    set long(value: string);
    set lat(value: string);
    get configured(): boolean;
    get sunriseoffset(): number;
    set sunriseoffset(value: number);
    get sunsetoffset(): number;
    set sunsetoffset(value: number);
    get daylight(): boolean;
    set daylight(value: boolean);
}
