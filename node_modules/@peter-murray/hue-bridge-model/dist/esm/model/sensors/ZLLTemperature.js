import { Int16Type } from '../../types';
import { Sensor } from './Sensor';
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new Int16Type({ name: 'temperature' }),
];
export class ZLLTemperature extends Sensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get temperature() {
        return this.getStateAttributeValue('temperature');
    }
}
