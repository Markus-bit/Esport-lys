import { Group } from './Group';
export declare class Zone extends Group {
    constructor(id?: string | number);
    get lights(): string[];
    set lights(value: string[]);
    set class(value: string);
    get class(): string;
}
