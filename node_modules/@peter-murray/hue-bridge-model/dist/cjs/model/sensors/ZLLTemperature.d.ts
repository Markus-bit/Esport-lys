import { Sensor } from './Sensor';
export declare class ZLLTemperature extends Sensor {
    constructor(id: number | string);
    get temperature(): number;
}
