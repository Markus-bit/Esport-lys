import { BridgeObject } from '../BridgeObject';
import { BaseType } from '../../types';
import { BridgeActionPayload } from './index';
export declare type BridgeActionData = {
    address: string;
    method: string;
    body?: object;
};
export declare abstract class BridgeAction extends BridgeObject {
    protected constructor(attributes: BaseType<any>[], method: string);
    get method(): any;
    get isRuleAction(): boolean;
    get isScheduleAction(): boolean;
    abstract get address(): string;
    abstract get body(): object;
    withMethod(value: string): this;
    get payload(): BridgeActionPayload;
    toString(): string;
}
