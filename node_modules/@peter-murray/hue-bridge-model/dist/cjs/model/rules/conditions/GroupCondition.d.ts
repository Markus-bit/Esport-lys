import { Group } from '../../groups/Group';
import { RuleCondition } from './RuleCondition';
import { RuleConditionOperator } from './RuleConditionOperator';
export declare class GroupCondition {
    readonly id: string | number;
    groupStateAttribute: string | null;
    private _operator;
    value?: string | number | boolean;
    constructor(id: Group | string | number);
    when(): SelectAttribute;
    getRuleCondition(): RuleCondition;
    get operator(): RuleConditionOperator | null;
    setOperator(value: string | RuleConditionOperator): void;
    _setRequiredValue(value: string | number | boolean | null): void;
}
export declare class SelectAttribute {
    private _condition;
    private _selectOperator;
    constructor(condition: GroupCondition);
    allOn(): SelectOperator;
    anyOn(): SelectOperator;
}
export declare class SelectOperator {
    private _condition;
    constructor(condition: GroupCondition);
    equals(val: string | number | boolean): GroupCondition;
    changed(): GroupCondition;
    changedDelayed(val: number | boolean): GroupCondition;
}
