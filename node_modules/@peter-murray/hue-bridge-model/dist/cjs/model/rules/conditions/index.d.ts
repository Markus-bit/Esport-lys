import { RuleCondition, RuleConditionData } from './RuleCondition';
import { GroupCondition } from './GroupCondition';
import { SensorCondition } from './SensorCondition';
declare type RuleConditionPayload = RuleCondition | SensorCondition | GroupCondition | RuleConditionData;
export { createRuleCondition, RuleConditionPayload };
declare function createRuleCondition(data: RuleConditionPayload): RuleCondition;
