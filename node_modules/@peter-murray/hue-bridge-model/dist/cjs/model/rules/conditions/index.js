"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRuleCondition = void 0;
//TODO verify we have all conditions covered
const RuleCondition_1 = require("./RuleCondition");
const GroupCondition_1 = require("./GroupCondition");
const HueBridgeModelError_1 = require("../../../HueBridgeModelError");
const SensorCondition_1 = require("./SensorCondition");
function createRuleCondition(data) {
    if (data) {
        if (data instanceof SensorCondition_1.SensorCondition || data instanceof GroupCondition_1.GroupCondition) {
            return data.getRuleCondition();
        }
        else if (data instanceof RuleCondition_1.RuleCondition) {
            return data;
        }
        else {
            return new RuleCondition_1.RuleCondition(data);
        }
    }
    else {
        throw new HueBridgeModelError_1.HueBridgeModelError('No data provided to build RuleCondition instance from.');
    }
}
exports.createRuleCondition = createRuleCondition;
