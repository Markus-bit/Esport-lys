import { CLIPSensor } from './CLIPSensor';
import { BooleanType } from '../../types';
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new BooleanType({ name: 'open' })
];
export class CLIPOpenClose extends CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get open() {
        return this.getStateAttributeValue('open');
    }
    set open(value) {
        this._updateStateAttributeValue('open', value);
    }
}
