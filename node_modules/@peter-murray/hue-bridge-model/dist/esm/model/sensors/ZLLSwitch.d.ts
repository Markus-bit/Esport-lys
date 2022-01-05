import { Sensor } from './Sensor';
export declare class ZLLSwitch extends Sensor {
    constructor(id: number | string);
    get battery(): number;
    set battery(value: number);
    get alert(): string;
    set alert(value: string);
    get reachable(): boolean;
    set reachable(value: boolean);
    get pending(): string;
    get buttonevent(): number;
}
