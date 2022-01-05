import { Group } from './Group';
import { BooleanType, ChoiceType, ListType, ObjectType, StringType } from '../../types';
const ATTRIBUTES = [
    new StringType({ name: 'type', defaultValue: 'Entertainment' }),
    // iOS Hue application is defaulting the types to TV currently, also only TV and Other seem to work out of all the classes
    new ChoiceType({ name: 'class', defaultValue: 'TV', validValues: ['TV', 'Other'] }),
    new ObjectType({
        name: 'stream',
        types: [
            new StringType({ name: 'proxymode' }),
            new StringType({ name: 'proxynode' }),
            new BooleanType({ name: 'active' }),
            new StringType({ name: 'owner' }),
        ]
    }),
    new ObjectType({ name: 'locations' }),
    new ListType({ name: 'lights', minEntries: 0, entryType: new StringType({ name: 'lightId' }) }),
];
/**
 * A Group of lights that can be utilized in an Entertainment situation for streaming.
 *
 * There are limitations on which lights can be added to an Entertainment Group, as they need to support the ability
 * to stream, which requires newer lights in the hue ecosystem.
 */
export class Entertainment extends Group {
    constructor(id) {
        super(ATTRIBUTES, id);
    }
    set lights(value) {
        this.setAttributeValue('lights', value);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
    set class(value) {
        this.setAttributeValue('class', value);
    }
    get class() {
        return this.getAttributeValue('class');
    }
    get stream() {
        return this.getAttributeValue('stream');
    }
    // TODO consider unpacking this in to something more user friendly
    get locations() {
        return this.getAttributeValue('locations');
    }
}
