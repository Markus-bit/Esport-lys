import { RuleConditionOperator } from './RuleConditionOperator';
declare const Equals: RuleConditionOperator, Dx: RuleConditionOperator, Ddx: RuleConditionOperator, Stable: RuleConditionOperator, NotStable: RuleConditionOperator, In: RuleConditionOperator, NotIn: RuleConditionOperator, LessThan: RuleConditionOperator, GreaterThan: RuleConditionOperator;
declare function getOperator(value: RuleConditionOperator | string | null): RuleConditionOperator | null;
declare const Changed: RuleConditionOperator;
declare const ChangedDelayed: RuleConditionOperator;
export { Equals, Dx, Ddx, Stable, NotStable, In, NotIn, LessThan, GreaterThan, Changed, ChangedDelayed, getOperator };
