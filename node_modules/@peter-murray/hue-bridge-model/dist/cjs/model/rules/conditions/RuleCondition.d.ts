import { RuleConditionOperator } from './RuleConditionOperator';
export declare type RuleConditionData = {
    address: string;
    operator: RuleConditionOperator;
    value?: string | number | boolean;
};
export declare class RuleCondition {
    private readonly address;
    private readonly operator;
    private readonly value?;
    constructor(data: RuleConditionData);
    get payload(): {
        address: string;
        operator: string;
    };
    toString(): string;
}
