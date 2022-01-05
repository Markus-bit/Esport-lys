import { RangedNumberType } from '../../types';
export declare abstract class States<T> {
    private _state;
    private readonly _allowedStates;
    protected me: T;
    constructor(attributes: string[]);
    reset(): T;
    getPayload(): object;
    getAllowedStateNames(): string[];
    populate(data: object | null): this;
    protected _setStateValue(definitionName: string, value: any): T;
    protected _convertPercentageToStateValue(value: number | string, stateName: string, isFloat?: boolean): number | null;
    protected _convertDegreesToStateValue(value: string | number, stateName: string, isFloat?: boolean): number | null;
    protected _convertToStateValue(range: RangedNumberType, value: string | number, stateName: string, isFloat?: boolean): number | null;
}
