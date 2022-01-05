import { BaseType } from '../../types';
import { BridgeObjectWithId } from '../BridgeObjectWithId';
declare type AppData = {
    version: number;
    data: string;
};
export declare class Scene extends BridgeObjectWithId {
    constructor(attributes: BaseType<any>[], type: string, id?: number | string);
    get name(): string;
    set name(value: string);
    get type(): string;
    get owner(): string;
    get recycle(): boolean;
    set recycle(value: boolean);
    get locked(): boolean;
    get appdata(): AppData;
    set appdata(value: AppData);
    set picture(value: string);
    get picture(): string;
    get lastupdated(): string;
    get version(): number;
}
export {};
