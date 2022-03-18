import { CLIPSensor } from './CLIPSensor';
export declare class CLIPTemperature extends CLIPSensor {
    constructor(id?: number | string);
    get temperature(): number;
    set temperature(value: number);
}
