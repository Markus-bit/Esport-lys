import { CLIPSensor } from './CLIPSensor';
export declare class CLIPGenericStatus extends CLIPSensor {
    constructor(id?: number | string);
    get status(): any;
    set status(value: any);
}
