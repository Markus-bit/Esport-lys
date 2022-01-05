import { CLIPSensor } from './CLIPSensor';
export declare class CLIPOpenClose extends CLIPSensor {
    constructor(id?: number | string);
    get open(): boolean;
    set open(value: boolean);
}
