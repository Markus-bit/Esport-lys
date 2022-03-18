import { BridgeAction } from './BridgeAction';
import { LightState } from '../lightstate/LightState';
import { Light } from '../Light';
export declare class LightStateAction extends BridgeAction {
    constructor(light: Light | string | number);
    get address(): string;
    get light(): Light | string | number;
    set light(value: Light | string | number);
    withState(state: LightState | object): this;
    get body(): any;
}
