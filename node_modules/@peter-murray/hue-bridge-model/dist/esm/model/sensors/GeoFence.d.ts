import { Sensor } from './Sensor';
export declare class GeoFence extends Sensor {
    constructor(id: number | string);
    get presence(): boolean;
}
