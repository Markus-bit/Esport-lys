import { BaseType } from '../../types';
import { BridgeObjectWithId } from '../BridgeObjectWithId';
export declare class Sensor extends BridgeObjectWithId {
    private _configAttributes;
    private _stateAttributes;
    constructor(configAttributes: BaseType<any>[], stateAttributes: BaseType<any>[], id?: string | number, data?: object);
    set name(value: any);
    get name(): any;
    get modelid(): any;
    get manufacturername(): any;
    get swversion(): any;
    get swconfigid(): any;
    get type(): any;
    get uniqueid(): any;
    get capabilities(): any;
    get lastupdated(): any;
    get on(): any;
    set on(value: any);
    getConfig(): any;
    getConfigAttribute(name: string): BaseType<any>;
    getStateAttribute(name: string): BaseType<any>;
    getStateAttributeNames(): string[];
    getConfigAttributeValue(name: string): any;
    getStateAttributeValue(name: string): any;
    _updateStateAttributeValue(name: string, value: any): this;
    _updateConfigAttributeValue(name: string, value: any): this;
    getHuePayload(): object;
    static removeNullValues(data: object | null): void;
}
