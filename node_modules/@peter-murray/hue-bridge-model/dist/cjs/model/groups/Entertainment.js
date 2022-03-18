"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entertainment = void 0;
const Group_1 = require("./Group");
const types_1 = require("../../types");
const ATTRIBUTES = [
    new types_1.StringType({ name: 'type', defaultValue: 'Entertainment' }),
    // iOS Hue application is defaulting the types to TV currently, also only TV and Other seem to work out of all the classes
    new types_1.ChoiceType({ name: 'class', defaultValue: 'TV', validValues: ['TV', 'Other'] }),
    new types_1.ObjectType({
        name: 'stream',
        types: [
            new types_1.StringType({ name: 'proxymode' }),
            new types_1.StringType({ name: 'proxynode' }),
            new types_1.BooleanType({ name: 'active' }),
            new types_1.StringType({ name: 'owner' }),
        ]
    }),
    new types_1.ObjectType({ name: 'locations' }),
    new types_1.ListType({ name: 'lights', minEntries: 0, entryType: new types_1.StringType({ name: 'lightId' }) }),
];
/**
 * A Group of lights that can be utilized in an Entertainment situation for streaming.
 *
 * There are limitations on which lights can be added to an Entertainment Group, as they need to support the ability
 * to stream, which requires newer lights in the hue ecosystem.
 */
class Entertainment extends Group_1.Group {
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
exports.Entertainment = Entertainment;
