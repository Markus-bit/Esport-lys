import { BridgeObjectId, BridgeObjectWithId } from './BridgeObjectWithId';
export declare class Schedule extends BridgeObjectWithId {
    constructor(id?: BridgeObjectId);
    get name(): string;
    set name(value: string);
    get description(): string;
    set description(value: string);
    get command(): string;
    set command(value: string);
    get time(): any;
    get localtime(): any;
    set localtime(value: any);
    get status(): string;
    set status(value: string);
    get autodelete(): boolean;
    set autodelete(value: boolean);
    get recycle(): boolean;
    set recycle(value: boolean);
    get created(): string;
}
