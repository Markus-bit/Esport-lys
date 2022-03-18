import { BooleanType, ChoiceType, Int8Type, ObjectType, StringType } from '../../types';
import { BridgeObjectWithId } from '../BridgeObjectWithId';
const ATTRIBUTES = [
    new StringType({ name: 'id', minLength: 1, maxLength: 16 }),
    new StringType({ name: 'name', minLength: 1, maxLength: 32 }),
    new ChoiceType({ name: 'type', validValues: ['LightScene', 'GroupScene'], defaultValue: 'LightScene' }),
    new StringType({ name: 'owner' }),
    new BooleanType({ name: 'recycle', defaultValue: false }),
    new BooleanType({ name: 'locked' }),
    new ObjectType({ name: 'appdata', types: [new Int8Type({ name: 'version' }), new StringType({ name: 'data', minLength: 1, maxLength: 16, optional: true })] }),
    new StringType({ name: 'picture', minLength: 0, maxLength: 16 }),
    new StringType({ name: 'lastupdated' }),
    new Int8Type({ name: 'version' }),
];
export class Scene extends BridgeObjectWithId {
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
