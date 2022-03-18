import { BaseStates } from './BaseStates';
export declare class CommonStates<T> extends BaseStates<T> {
    constructor(attributes?: string[]);
    alert(value?: string): T;
    bri_inc(inc: number): T;
    incrementBrightness(inc: number): T;
    sat_inc(inc: number): T;
    incrementSaturation(inc: number): T;
    hue_inc(inc: number): T;
    incrementHue(inc: number): T;
    ct_inc(inc: number): T;
    incrementCt(inc: number): T;
    incrementColorTemp(inc: number): T;
    xy_inc(x_inc: number, y_inc: number): T;
    alertLong(): T;
    alertShort(): T;
    alertNone(): T;
}
