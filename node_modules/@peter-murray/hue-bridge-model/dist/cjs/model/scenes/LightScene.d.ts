import { Scene } from './Scene';
export declare class LightScene extends Scene {
    constructor(id?: string);
    get lights(): string[];
    set lights(lightIds: string[]);
    get lightstates(): object;
    set lightstates(value: object);
}
