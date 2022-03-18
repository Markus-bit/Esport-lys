import { BridgeAction, BridgeActionData } from './BridgeAction';
export declare type BridgeActionPayload = BridgeAction | BridgeActionData;
export declare function createAction(data: BridgeActionPayload): BridgeAction;
