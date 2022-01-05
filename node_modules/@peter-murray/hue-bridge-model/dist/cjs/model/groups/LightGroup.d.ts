import { Group } from './Group';
export declare class LightGroup extends Group {
    constructor(id?: string | number);
    set lights(value: string[]);
    get lights(): string[];
}
