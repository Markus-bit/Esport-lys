"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOperator = exports.ChangedDelayed = exports.Changed = exports.GreaterThan = exports.LessThan = exports.NotIn = exports.In = exports.NotStable = exports.Stable = exports.Ddx = exports.Dx = exports.Equals = void 0;
const RuleConditionOperator_1 = require("./RuleConditionOperator");
const Equals = new RuleConditionOperator_1.RuleConditionOperator('eq', ['=', '==', 'equals', '===']), Dx = new RuleConditionOperator_1.RuleConditionOperator('dx'), Ddx = new RuleConditionOperator_1.RuleConditionOperator('ddx'), Stable = new RuleConditionOperator_1.RuleConditionOperator('stable'), NotStable = new RuleConditionOperator_1.RuleConditionOperator('not stable'), In = new RuleConditionOperator_1.RuleConditionOperator('in'), NotIn = new RuleConditionOperator_1.RuleConditionOperator('not in'), LessThan = new RuleConditionOperator_1.RuleConditionOperator('lt', ['<']), GreaterThan = new RuleConditionOperator_1.RuleConditionOperator('gt', ['>']);
exports.Equals = Equals;
exports.Dx = Dx;
exports.Ddx = Ddx;
exports.Stable = Stable;
exports.NotStable = NotStable;
exports.In = In;
exports.NotIn = NotIn;
exports.LessThan = LessThan;
exports.GreaterThan = GreaterThan;
function getOperator(value) {
    if (value === null) {
        return null;
    }
    if (value instanceof RuleConditionOperator_1.RuleConditionOperator) {
        return value;
    }
    else {
        let matchedOperator = null;
        if (value) {
            [Equals, Dx, Ddx, Stable, NotStable, In, NotIn, LessThan, GreaterThan].some(operator => {
                if (operator.matches(value)) {
                    matchedOperator = operator;
                    return true;
                }
            });
        }
        return matchedOperator;
    }
}
exports.getOperator = getOperator;
const Changed = Dx;
exports.Changed = Changed;
const ChangedDelayed = Ddx;
exports.ChangedDelayed = ChangedDelayed;
