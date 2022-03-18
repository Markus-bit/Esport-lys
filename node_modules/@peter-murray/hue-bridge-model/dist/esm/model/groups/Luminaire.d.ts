import { Group } from './Group';
export declare class Luminaire extends Group {
    constructor(id?: string | number);
    get lights(): string[];
}
