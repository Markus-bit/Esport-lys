"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeAction = void 0;
const BridgeObject_1 = require("../BridgeObject");
const types_1 = require("../../types");
const ATTRIBUTES = [
    new types_1.ChoiceType({ name: 'method', validValues: ['PUT', 'POST', 'DELETE'] }),
    new types_1.ChoiceType({ name: 'target', validValues: ['rule', 'schedule'] }),
];
class BridgeAction extends BridgeObject_1.BridgeObject {
    constructor(attributes, method) {
        super([...ATTRIBUTES, ...attributes]);
        this.withMethod(method);
    }
    get method() {
        return this.getAttributeValue('method');
    }
    //TODO maybe unnecessary
    get isRuleAction() {
        return this.getAttributeValue('target') === 'rule';
    }
    //TODO maybe unnecessary
    get isScheduleAction() {
        return this.getAttributeValue('target') === 'schedule';
    }
    withMethod(value) {
        return this.setAttributeValue('method', value);
    }
    //TODO revisit this
    get payload() {
        return {
            address: this.address,
            method: this.method,
            body: this.body
        };
    }
    toString() {
        return JSON.stringify(this.payload);
    }
}
exports.BridgeAction = BridgeAction;
;
