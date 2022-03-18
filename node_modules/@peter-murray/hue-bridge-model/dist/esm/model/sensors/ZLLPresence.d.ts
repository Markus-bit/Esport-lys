import { Sensor } from './Sensor';
export declare class ZLLPresence extends Sensor {
    constructor(id: number | string);
    get battery(): number;
    set battery(value: number);
    get alert(): string;
    set alert(value: string);
    get reachable(): boolean;
    set reachable(value: boolean);
    get sensitivity(): number;
    set sensitivity(value: number);
    get sensitivitymax(): number;
    set sensitivitymax(value: number);
    get presence(): boolean;
}
