import { CommonStates } from './CommonStates';
export class GroupState extends CommonStates {
    constructor() {
        super(['scene']);
    }
    scene(value) {
        return this._setStateValue('scene', value);
    }
}
