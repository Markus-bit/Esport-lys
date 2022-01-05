import { Group } from './Group';
import { ChoiceType, ListType, StringType } from '../../types';
const ATTRIBUTES = [
    new StringType({ name: 'type', defaultValue: 'Zone' }),
    new ChoiceType({ name: 'class', defaultValue: 'Other', validValues: Group.getAllGroupClasses() }),
    new ListType({ name: 'lights', minEntries: 0, entryType: new StringType({ name: 'lightId' }) }),
];
export class Zone extends Group {
    constructor(id) {
        super(ATTRIBUTES, id);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
    set lights(value) {
        this.setAttributeValue('lights', value);
    }
    set class(value) {
        this.setAttributeValue('class', value);
    }
    get class() {
        return this.getAttributeValue('class');
    }
}
