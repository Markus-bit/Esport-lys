import { BaseType } from '../../types';
import { Sensor } from './Sensor';
export declare class CLIPSensor extends Sensor {
    constructor(configAttributes: BaseType<any>[], stateAttributes: BaseType<any>[], id?: string | number);
    get reachable(): boolean;
    set reachable(value: boolean);
    get battery(): number;
    set battery(value: number);
    get url(): string;
    set url(value: string);
    set modelid(value: string);
    set swversion(value: string);
    set uniqueid(value: string);
    set manufacturername(value: string);
    get recycle(): boolean;
}
