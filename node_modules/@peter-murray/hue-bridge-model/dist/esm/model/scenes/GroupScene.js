import { ListType, ObjectType, StringType } from '../../types';
import { Scene } from './Scene';
const ATTRIBUTES = [
    new StringType({ name: 'group' }),
    new ListType({ name: 'lights', optional: true, minEntries: 1, entryType: new StringType({ name: 'lightId' }) }),
    new ObjectType({ name: 'lightstates' }),
];
export class GroupScene extends Scene {
    constructor(id) {
        super(ATTRIBUTES, 'GroupScene', id);
    }
    get group() {
        return this.getAttributeValue('group');
    }
    set group(id) {
        this.setAttributeValue('group', id);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
    get lightstates() {
        return this.getAttributeValue('lightstates');
    }
}
