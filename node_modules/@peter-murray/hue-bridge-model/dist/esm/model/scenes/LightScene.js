import { Scene } from './Scene';
import { ListType, ObjectType, StringType } from '../../types';
const ATTRIBUTES = [
    new ListType({ name: 'lights', minEntries: 1, entryType: new StringType({ name: 'lightId' }) }),
    new ObjectType({ name: 'lightstates' }),
];
export class LightScene extends Scene {
    constructor(id) {
        super(ATTRIBUTES, 'LightScene', id);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
    set lights(lightIds) {
        this.setAttributeValue('lights', lightIds);
    }
    get lightstates() {
        return this.getAttributeValue('lightstates');
    }
    set lightstates(value) {
        this.setAttributeValue('lightstates', value);
    }
}
