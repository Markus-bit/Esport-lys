"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
const types_1 = require("../../types");
const BridgeObjectWithId_1 = require("../BridgeObjectWithId");
const ATTRIBUTES = [
    new types_1.StringType({ name: 'id', minLength: 1, maxLength: 16 }),
    new types_1.StringType({ name: 'name', minLength: 1, maxLength: 32 }),
    new types_1.ChoiceType({ name: 'type', validValues: ['LightScene', 'GroupScene'], defaultValue: 'LightScene' }),
    new types_1.StringType({ name: 'owner' }),
    new types_1.BooleanType({ name: 'recycle', defaultValue: false }),
    new types_1.BooleanType({ name: 'locked' }),
    new types_1.ObjectType({ name: 'appdata', types: [new types_1.Int8Type({ name: 'version' }), new types_1.StringType({ name: 'data', minLength: 1, maxLength: 16, optional: true })] }),
    new types_1.StringType({ name: 'picture', minLength: 0, maxLength: 16 }),
    new types_1.StringType({ name: 'lastupdated' }),
    new types_1.Int8Type({ name: 'version' }),
];
class Scene extends BridgeObjectWithId_1.BridgeObjectWithId {
    constructor(attributes, type, id) {
        super([...ATTRIBUTES, ...attributes], id);
        this.setAttributeValue('type', type);
    }
    get name() {
        return this.getAttributeValue('name');
    }
    set name(value) {
        this.setAttributeValue('name', value);
    }
    get type() {
        return this.getAttributeValue('type');
    }
    get owner() {
        return this.getAttributeValue('owner');
    }
    get recycle() {
        return this.getAttributeValue('recycle');
    }
    set recycle(value) {
        this.setAttributeValue('recycle', value);
    }
    get locked() {
        return this.getAttributeValue('locked');
    }
    get appdata() {
        return this.getAttributeValue('appdata');
    }
    set appdata(value) {
        this.setAttributeValue('appdata', value);
    }
    set picture(value) {
        this.setAttributeValue('picture', value);
    }
    get picture() {
        return this.getAttributeValue('picture');
    }
    get lastupdated() {
        return this.getAttributeValue('lastupdated');
    }
    get version() {
        return this.getAttributeValue('version');
    }
}
exports.Scene = Scene;
