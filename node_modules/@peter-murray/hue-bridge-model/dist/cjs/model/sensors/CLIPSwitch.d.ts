import { CLIPSensor } from './CLIPSensor';
export declare class CLIPSwitch extends CLIPSensor {
    constructor(id?: number | string);
    get buttonevent(): number;
    set buttonevent(value: number);
}
