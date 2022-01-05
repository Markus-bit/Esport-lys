import { HueBridgeModelError } from './HueBridgeModelError';
//TODO remove
// export interface ModelAttributes {
//   [key: string]: Type<any>
// }
export class AttributeObject {
    constructor(attributes) {
        this.data = {};
        this.attributes = {};
        attributes.forEach(attr => {
            this.attributes[attr.name] = attr;
        });
    }
    getAttributeValue(name) {
        const definition = this.attributes[name];
        if (definition) {
            return definition.getValue(this.data[name]);
        }
        else {
            throw new HueBridgeModelError(`Requesting value for invalid attribute '${name}'`);
        }
    }
    setAttributeValue(name, value) {
        const definition = this.attributes[name];
        if (definition) {
            this.data[definition.name] = definition.getValue(value);
        }
        else {
            throw new HueBridgeModelError(`Attempted to set attribute '${name}', but do not have a definition registered`);
        }
        return this;
    }
    toString() {
        return `${this.constructor.name}`;
    }
    //TODO rename this
    get _bridgeData() {
        // Return a copy so that it cannot be modified from outside
        return Object.assign({}, this.data);
    }
}
