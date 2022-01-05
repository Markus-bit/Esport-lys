import { Group } from './Group';
export declare class Room extends Group {
    constructor(id?: number | string);
    get lights(): string[];
    set lights(value: string[]);
    set class(value: string);
    get class(): string;
}
