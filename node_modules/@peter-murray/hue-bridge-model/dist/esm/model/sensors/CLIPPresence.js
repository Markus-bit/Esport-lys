import { BooleanType } from '../../types';
import { CLIPSensor } from './CLIPSensor';
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new BooleanType({ name: 'presence' }),
];
export class CLIPPresence extends CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get presence() {
        return this.getStateAttributeValue('presence');
    }
    set presence(value) {
        this._updateStateAttributeValue('presence', value);
    }
}
