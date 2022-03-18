// TODO Do not have an example of this the API documentation is not correct as it refers to a standard LightGroup definition
import { Group } from './Group';
import { ListType, StringType } from '../../types';
const ATTRIBUTES = [
    new StringType({ name: 'type', defaultValue: 'Lightsource' }),
    new ListType({ name: 'lights', minEntries: 1, entryType: new StringType({ name: 'lightId' }) }),
];
export class Lightsource extends Group {
    constructor(id) {
        super(ATTRIBUTES, id);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
}
