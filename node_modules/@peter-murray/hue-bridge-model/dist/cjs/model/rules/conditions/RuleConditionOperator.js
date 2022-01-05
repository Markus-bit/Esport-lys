"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleConditionOperator = void 0;
class RuleConditionOperator {
    constructor(name, matchValues) {
        this.type = name;
        this._matchValues = [name];
        if (matchValues) {
            this._matchValues = this._matchValues.concat(matchValues);
        }
    }
    matches(value) {
        let matched = false;
        if (value instanceof RuleConditionOperator) {
            return this.type === value.type;
        }
        else {
            this._matchValues.some(match => {
                if (match === value) {
                    matched = true;
                    return true;
                }
            });
        }
        return matched;
    }
    get payload() {
        return this.type;
    }
}
exports.RuleConditionOperator = RuleConditionOperator;
