"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeObjectWithId = void 0;
const BridgeObject_1 = require("./BridgeObject");
const HueBridgeModelError_1 = require("../HueBridgeModelError");
class BridgeObjectWithId extends BridgeObject_1.BridgeObject {
    constructor(attributes, id) {
        super(attributes);
        // Validate that we have an id definition
        if (!this.attributes.id) {
            throw new HueBridgeModelError_1.HueBridgeModelError('All bridge objects must have an "id" definition');
        }
        this.setAttributeValue('id', id);
    }
    get id() {
        return this.getAttributeValue('id');
    }
}
exports.BridgeObjectWithId = BridgeObjectWithId;
