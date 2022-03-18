import { BridgeAction } from './BridgeAction';
export declare class ScheduleStateAction extends BridgeAction {
    private id?;
    private _state?;
    constructor(id?: string | number);
    get address(): string;
    withState(data: object): this;
    get body(): object;
}
