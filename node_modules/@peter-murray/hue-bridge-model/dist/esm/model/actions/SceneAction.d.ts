import { BridgeAction } from './BridgeAction';
import { Scene } from '../scenes/Scene';
export declare class SceneAction extends BridgeAction {
    constructor(scene: Scene | string);
    get address(): string;
    get scene(): string;
    withScene(value: Scene | string): void;
    withState(data: object): this;
    get body(): object;
}
