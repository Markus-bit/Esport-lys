import { CLIPSensor } from './CLIPSensor';
export declare class CLIPGenericFlag extends CLIPSensor {
    constructor(id?: number | string);
    get flag(): boolean;
    set flag(value: boolean);
}
