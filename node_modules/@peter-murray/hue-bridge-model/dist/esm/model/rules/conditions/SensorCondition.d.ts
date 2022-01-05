import { Sensor } from '../../sensors/Sensor';
import { RuleConditionOperator } from './RuleConditionOperator';
import { RuleCondition } from './RuleCondition';
export declare class SensorCondition {
    private _sensor;
    private _sensorStateAttribute;
    private _operator;
    private _value;
    constructor(sensor: Sensor);
    when(attribute: string): SelectOperator;
    get sensor(): Sensor;
    get sensorStateAttribute(): string | null;
    get operator(): RuleConditionOperator | null;
    getRuleCondition(): RuleCondition;
    _setOperator(value: RuleConditionOperator | string): void;
    _setRequiredValue(value: any): void;
}
declare class SelectOperator {
    private readonly _sensorCondition;
    constructor(sensorCondition: SensorCondition);
    equals(val: boolean | number): SensorCondition;
    greaterThan(val: number): SensorCondition;
    lessThan(val: number): SensorCondition;
    changed(): SensorCondition;
    changedDelayed(interval: number): SensorCondition;
    stable(interval: number): SensorCondition;
    notStable(interval: number): SensorCondition;
    in(interval: string): SensorCondition;
    notIn(interval: string): SensorCondition;
}
export {};
