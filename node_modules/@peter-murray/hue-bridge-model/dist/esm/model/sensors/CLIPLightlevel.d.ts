import { CLIPSensor } from './CLIPSensor';
export declare class CLIPLightlevel extends CLIPSensor {
    constructor(id?: number | string);
    get tholddark(): number;
    set tholddark(value: number);
    get thresholdDark(): number;
    get tholdoffset(): number;
    set tholdoffset(value: number);
    get thresholdOffset(): number;
    get lightlevel(): number;
    set lightlevel(value: number);
    get dark(): boolean;
    set dark(value: boolean);
    get daylight(): boolean;
    set daylight(value: boolean);
}
