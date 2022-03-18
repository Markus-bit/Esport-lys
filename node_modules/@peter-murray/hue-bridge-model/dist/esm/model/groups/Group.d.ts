import { BaseType } from '../../types';
import { BridgeObjectWithId } from '../BridgeObjectWithId';
export declare class Group extends BridgeObjectWithId {
    constructor(attributes: BaseType<any>[], id?: string | number);
    get name(): string;
    set name(value: string);
    set sensors(value: string[]);
    get sensors(): string[];
    get type(): string;
    get action(): Object;
    get recycle(): boolean;
    get state(): Object;
    static getAllGroupClasses(): string[];
}
