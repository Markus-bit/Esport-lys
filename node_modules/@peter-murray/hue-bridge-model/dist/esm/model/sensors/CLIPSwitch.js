import { CLIPSensor } from './CLIPSensor';
import { UInt16Type } from '../../types';
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new UInt16Type({ name: 'buttonevent' }),
];
export class CLIPSwitch extends CLIPSensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get buttonevent() {
        return this.getStateAttributeValue('buttonevent');
    }
    set buttonevent(value) {
        this._updateStateAttributeValue('buttonevent', value);
    }
}
