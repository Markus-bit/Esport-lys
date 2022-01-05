"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const types_1 = require("../../types");
const BridgeObjectWithId_1 = require("../BridgeObjectWithId");
const HueBridgeModelError_1 = require("../../HueBridgeModelError");
const ROOM_CLASSES = [
    'Living room',
    'Kitchen',
    'Dining',
    'Bedroom',
    'Kids bedroom',
    'Bathroom',
    'Nursery',
    'Recreation',
    'Office',
    'Gym',
    'Hallway',
    'Toilet',
    'Front door',
    'Garage',
    'Terrace',
    'Garden',
    'Driveway',
    'Carport',
    'Other',
    // The following are valid in 1.30 and higher of the API
    'Home',
    'Downstairs',
    'Upstairs',
    'Top floor',
    'Attic',
    'Guest room',
    'Staircase',
    'Lounge',
    'Man cave',
    'Computer',
    'Studio',
    'Music',
    'TV',
    'Reading',
    'Closet',
    'Storage',
    'Laundry room',
    'Balcony',
    'Porch',
    'Barbecue',
    'Pool',
];
const ATTRIBUTES = [
    new types_1.Int8Type({ name: 'id' }),
    new types_1.StringType({ name: 'name', minLength: 0, maxLength: 32 }),
    new types_1.ListType({ name: 'sensors', minEntries: 0, entryType: new types_1.StringType({ name: 'sensorId' }) }),
    new types_1.ObjectType({ name: 'action' }),
    new types_1.ObjectType({
        name: 'state',
        types: [
            new types_1.BooleanType({ name: 'all_on' }),
            new types_1.BooleanType({ name: 'any_on' }),
        ]
    }),
    // Only present if the group contains a ZLLPresence or CLIPPresence
    new types_1.ObjectType({
        name: 'presence',
        types: [
            new types_1.StringType({ name: 'lastupdated' }),
            new types_1.BooleanType({ name: 'presence' }),
            new types_1.BooleanType({ name: 'presence_all' })
        ]
    }),
    // Only present if the group contains a ZLLLightlevel or CLIPLightLevel
    new types_1.ObjectType({
        name: 'lightlevel', types: [
            new types_1.StringType({ name: 'lastupdated' }),
            new types_1.BooleanType({ name: 'dark' }),
            new types_1.BooleanType({ name: 'dark_all' }),
            new types_1.BooleanType({ name: 'daylight' }),
            new types_1.BooleanType({ name: 'daylight_any' }),
            new types_1.UInt16Type({ name: 'lightlevel' }),
            new types_1.UInt16Type({ name: 'lightlevel_min' }),
            new types_1.UInt16Type({ name: 'lightlevel_max' }),
        ]
    }),
    new types_1.BooleanType({ name: 'recycle', defaultValue: false }),
];
class Group extends BridgeObjectWithId_1.BridgeObjectWithId {
    constructor(attributes, id) {
        super([...ATTRIBUTES, ...attributes], id);
        if (!this.attributes.type) {
            throw new HueBridgeModelError_1.HueBridgeModelError('Missing a valid type attribute for the Group');
        }
        if (!this.attributes.lights) {
            throw new HueBridgeModelError_1.HueBridgeModelError('Missing a valid lights attribute for the Group');
        }
    }
    get name() {
        return this.getAttributeValue('name');
    }
    set name(value) {
        this.setAttributeValue('name', value);
    }
    set sensors(value) {
        this.setAttributeValue('sensors', value);
    }
    get sensors() {
        return this.getAttributeValue('sensors');
    }
    get type() {
        return this.getAttributeValue('type');
    }
    get action() {
        // //TODO this is a lightstate
        // return this.getRawDataValue('action');
        return this.getAttributeValue('action');
    }
    get recycle() {
        return this.getAttributeValue('recycle');
    }
    get state() {
        return this.getAttributeValue('state');
    }
    static getAllGroupClasses() {
        return ROOM_CLASSES;
    }
}
exports.Group = Group;
