import { BridgeObjectId, BridgeObjectWithId } from './BridgeObjectWithId';
import { LooseObject } from '../AttributeObject';
export declare type Links = {
    [key: string]: BridgeObjectId[];
};
export declare class ResourceLink extends BridgeObjectWithId {
    private _links;
    constructor(id?: BridgeObjectId);
    set name(value: string);
    get name(): string;
    get description(): string;
    set description(value: string);
    get type(): string;
    get classid(): number;
    set classid(value: number);
    get owner(): string;
    get recycle(): boolean;
    set recycle(value: boolean);
    get links(): Links;
    resetLinks(): ResourceLink;
    addLink(type: string, id: BridgeObjectId): this;
    removeLink(type: string, id: BridgeObjectId): this;
    toStringDetailed(): string;
    getJsonPayload(): import("./BridgeObject").BridgeObjectJsonData;
    getHuePayload(): Object;
    _populate(data: LooseObject): this;
}
