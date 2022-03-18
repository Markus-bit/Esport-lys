import { BridgeObject } from '../BridgeObject';
import { ChoiceType } from '../../types';
const ATTRIBUTES = [
    new ChoiceType({ name: 'method', validValues: ['PUT', 'POST', 'DELETE'] }),
    new ChoiceType({ name: 'target', validValues: ['rule', 'schedule'] }),
];
export class BridgeAction extends BridgeObject {
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
;
