import { BridgeObject } from './BridgeObject';
import { HueBridgeModelError } from '../HueBridgeModelError';
export class BridgeObjectWithId extends BridgeObject {
    constructor(attributes, id) {
        super(attributes);
        // Validate that we have an id definition
        if (!this.attributes.id) {
            throw new HueBridgeModelError('All bridge objects must have an "id" definition');
        }
        this.setAttributeValue('id', id);
    }
    get id() {
        return this.getAttributeValue('id');
    }
}
