import { BridgeAction } from './BridgeAction';
import { Sensor } from '../sensors/Sensor';
export declare class SensorStateAction extends BridgeAction {
    constructor(sensor: Sensor | number | string);
    get address(): string;
    get sensor(): number;
    withSensor(value: Sensor | number | string): void;
    withState(value: object): this;
    get body(): any;
}
