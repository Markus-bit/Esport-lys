import { BaseType } from '../types';
import { AttributeObject, LooseObject } from '../AttributeObject';
export declare type BridgeObjectJsonData = {
    node_hue_api: {
        type: string;
        version: number;
    };
    [name: string]: any;
};
export declare type BridgeObjectHueData = {
    [name: string]: any;
};
export declare abstract class BridgeObject extends AttributeObject {
    private populationData;
    protected constructor(attributes: BaseType<any>[]);
    toStringDetailed(): string;
    /**
     * Obtains a node-hue-api specific JSON payload of the BridgeObject. This can be used for serialization purposes.
     *
     * This functionality exists to support use cases where server backends need to send data to a web based client to
     * work around CORS or custom backend functionality, whilst preserving and providing reusability of the API objects.
     *
     * @returns {BridgeObjectJsonData} A node-hue-api specific payload that represents the Bridge Object, this can be reconstructed into
     * a valid BridgeObject instance via the model.createFromJson() function.
     */
    getJsonPayload(): BridgeObjectJsonData;
    /**
     * Obtains a Hue API compatible representation of the Bridge Object that can be used over the RESTful API.
     * @returns {BridgeObjectHueData} The payload that is compatible with the Hue RESTful API documentation.
     */
    getHuePayload(): BridgeObjectHueData;
    /**
     * @param data {*}
     * @returns {BridgeObject}
     * @private
     */
    _populate(data: LooseObject): this;
}
