import { CommonStates } from './CommonStates';
export declare class LightState extends CommonStates<LightState> {
    constructor();
    white(temp: number, bri: number): this;
    hsb(hue: number, saturation: number, brightness: number): this;
    hsl(hue: number, saturation: number, luminosity: number): this;
    rgb(red: number | number[], green?: number, blue?: number): LightState;
}
