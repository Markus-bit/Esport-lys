import { Scene } from './Scene';
export declare class GroupScene extends Scene {
    constructor(id?: string);
    get group(): string;
    set group(id: string);
    get lights(): string[];
    get lightstates(): object;
}
