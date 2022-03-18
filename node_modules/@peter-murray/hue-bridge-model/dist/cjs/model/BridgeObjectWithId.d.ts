import { BridgeObject } from './BridgeObject';
import { BaseType } from '../types';
export declare type BridgeObjectId = number | string;
export declare abstract class BridgeObjectWithId extends BridgeObject {
    protected constructor(attributes: BaseType<any>[], id?: BridgeObjectId);
    get id(): BridgeObjectId;
}
