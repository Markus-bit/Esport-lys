import { Sensor } from './Sensor';
export declare class ZLLLightlevel extends Sensor {
    constructor(id: number | string);
    get tholddark(): number;
    set tholddark(value: number);
    get thresholdDark(): number;
    get tholdoffset(): number;
    set tholdoffset(value: number);
    get thresholdOffset(): number;
    get lightlevel(): number;
    set lightlevel(value: number);
    get dark(): boolean;
    get daylight(): boolean;
}
