"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capabilities = void 0;
const types_1 = require("../types");
const BridgeObject_1 = require("./BridgeObject");
const ATTRIBUTES = [
    new types_1.ObjectType({
        name: 'lights',
        types: [
            new types_1.UInt16Type({ name: 'available' }),
            new types_1.UInt16Type({ name: 'total' }),
        ]
    }),
    new types_1.ObjectType({
        name: 'sensors',
        types: [
            new types_1.UInt16Type({ name: 'available' }),
            new types_1.UInt16Type({ name: 'total' }),
            new types_1.ObjectType({
                name: 'clip',
                types: [
                    new types_1.UInt16Type({ name: 'available' }),
                    new types_1.UInt16Type({ name: 'total' }),
                ]
            }),
            new types_1.ObjectType({
                name: 'zll',
                types: [
                    new types_1.UInt16Type({ name: 'available' }),
                    new types_1.UInt16Type({ name: 'total' }),
                ]
            }),
            new types_1.ObjectType({
                name: 'zgp',
                types: [
                    new types_1.UInt16Type({ name: 'available' }),
                    new types_1.UInt16Type({ name: 'total' }),
                ]
            })
        ]
    }),
    new types_1.ObjectType({
        name: 'groups',
        types: [
            new types_1.UInt16Type({ name: 'available' }),
            new types_1.UInt16Type({ name: 'total' }),
        ]
    }),
    new types_1.ObjectType({
        name: 'scenes',
        types: [
            new types_1.UInt16Type({ name: 'available' }),
            new types_1.UInt16Type({ name: 'total' }),
            new types_1.ObjectType({
                name: 'lightstates',
                types: [
                    new types_1.UInt16Type({ name: 'available' }),
                    new types_1.UInt16Type({ name: 'total' }),
                ]
            }),
        ]
    }),
    new types_1.ObjectType({
        name: 'schedules',
        types: [
            new types_1.UInt16Type({ name: 'available' }),
            new types_1.UInt16Type({ name: 'total' }),
        ]
    }),
    new types_1.ObjectType({
        name: 'rules',
        types: [
            new types_1.UInt16Type({ name: 'available' }),
            new types_1.UInt16Type({ name: 'total' }),
            new types_1.ObjectType({
                name: 'conditions',
                types: [
                    new types_1.UInt16Type({ name: 'available' }),
                    new types_1.UInt16Type({ name: 'total' }),
                ]
            }),
            new types_1.ObjectType({
                name: 'actions',
                types: [
                    new types_1.UInt16Type({ name: 'available' }),
                    new types_1.UInt16Type({ name: 'total' }),
                ]
            }),
        ]
    }),
    new types_1.ObjectType({
        name: 'resourcelinks',
        types: [
            new types_1.UInt16Type({ name: 'available' }),
            new types_1.UInt16Type({ name: 'total' }),
        ]
    }),
    new types_1.ObjectType({
        name: 'streaming',
        types: [
            new types_1.UInt16Type({ name: 'available' }),
            new types_1.UInt16Type({ name: 'total' }),
            new types_1.UInt16Type({ name: 'channels' }),
        ]
    }),
    new types_1.ObjectType({
        name: 'timezones',
        types: [
            new types_1.ListType({ name: 'values', minEntries: 0, entryType: new types_1.StringType({ name: 'timezone' }) }),
        ]
    }),
];
class Capabilities extends BridgeObject_1.BridgeObject {
    constructor() {
        super(ATTRIBUTES);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
    get sensors() {
        return this.getAttributeValue('sensors');
    }
    get groups() {
        return this.getAttributeValue('groups');
    }
    get scenes() {
        return this.getAttributeValue('scenes');
    }
    get schedules() {
        return this.getAttributeValue('schedules');
    }
    get rules() {
        return this.getAttributeValue('rules');
    }
    get resourceLinks() {
        return this.getAttributeValue('resourcelinks');
    }
    get resourcelinks() {
        return this.getAttributeValue('resourcelinks');
    }
    get streaming() {
        return this.getAttributeValue('streaming');
    }
    get timezones() {
        return this.getAttributeValue('timezones').values;
    }
}
exports.Capabilities = Capabilities;
;
