import { CLIPSensor } from './CLIPSensor';
import { BooleanType } from '../../types';
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new BooleanType({ name: 'flag' }),
];
export class CLIPGenericFlag extends CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get flag() {
        return this.getStateAttributeValue('flag');
    }
    set flag(value) {
        this._updateStateAttributeValue('flag', value);
    }
}
