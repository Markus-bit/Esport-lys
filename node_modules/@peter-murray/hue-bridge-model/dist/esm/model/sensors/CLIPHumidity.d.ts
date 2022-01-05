import { CLIPSensor } from './CLIPSensor';
export declare class CLIPHumidity extends CLIPSensor {
    constructor(id?: number | string);
    get humidity(): any;
    set humidity(value: any);
}
