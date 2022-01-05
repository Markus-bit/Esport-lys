import { UInt16Type } from '../../types';
import { Sensor } from './Sensor';
const CONFIG_ATTRIBUTES = [];
const STATE_ATTRIBUTES = [
    new UInt16Type({ name: 'buttonevent' })
];
// Hue Tap Switch - Zigbee Green Power Switch
export class ZGPSwitch extends Sensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get buttonevent() {
        return this.getStateAttributeValue('buttonevent');
    }
}
