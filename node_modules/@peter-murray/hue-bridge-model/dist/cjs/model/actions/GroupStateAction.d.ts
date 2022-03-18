import { BridgeAction } from './BridgeAction';
import { Group } from '../groups/Group';
import { GroupState } from '../lightstate/GroupState';
export declare class GroupStateAction extends BridgeAction {
    constructor(group: Group | number | string);
    get address(): string;
    get group(): number;
    withGroup(value: Group | number | string): void;
    withState(state: GroupState | object): this;
    get body(): any;
}
