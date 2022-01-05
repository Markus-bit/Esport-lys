import { BridgeObjectId, BridgeObjectWithId } from './BridgeObjectWithId';
import { LooseObject } from '../AttributeObject';
import { ColorGamut } from './ColorGamuts';
export declare class Light extends BridgeObjectWithId {
    protected mappedColorGamut: string | null;
    constructor(id: BridgeObjectId);
    get name(): string;
    set name(value: string);
    get type(): string;
    get modelid(): string;
    get manufacturername(): string;
    get uniqueid(): string;
    get productid(): string;
    get productname(): string;
    get swversion(): string;
    get swupdate(): string;
    get state(): Object;
    get capabilities(): Object;
    get colorGamut(): ColorGamut | null;
    /**
     * Gets the supported states that the light will accept.
     */
    getSupportedStates(): string[];
    _populate(data: LooseObject): this;
}
