import { States } from './States';
export declare abstract class BaseStates<T> extends States<T> {
    constructor(attributes?: string[]);
    on(on?: boolean): T;
    off(off?: boolean): T;
    bri(value: number | null): T;
    hue(value: number | null): T;
    sat(value: number | null): T;
    xy(x: number | number[], y?: number | null): T;
    ct(value: number): T;
    effect(value?: string): T;
    transitiontime(value?: number): T;
    /**
     * Sets a percentage brightness value
     * @param value
     */
    brightness(value: number): T;
    /**
     * Sets a percentage saturation value
     * @param value
     */
    saturation(value: number): T;
    effectColorLoop(): T;
    effectNone(): T;
    transition(value: number): T;
    transitionSlow(): T;
    transitionFast(): T;
    transitionInstant(): T;
    transitionInMillis(value: number): T;
    transitionDefault(): T;
}
