import { CLIPSensor } from './CLIPSensor';
export declare class CLIPPresence extends CLIPSensor {
    constructor(id?: string | number);
    get presence(): boolean;
    set presence(value: boolean);
}
