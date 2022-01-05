export declare class RuleConditionOperator {
    private readonly type;
    private readonly _matchValues;
    constructor(name: string, matchValues?: string[]);
    matches(value: RuleConditionOperator | string): boolean;
    get payload(): string;
}
