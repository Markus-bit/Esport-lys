import { BaseType } from './types';
export interface LooseObject {
    [key: string]: any;
}
export declare abstract class AttributeObject {
    protected readonly attributes: LooseObject;
    protected readonly data: LooseObject;
    protected constructor(attributes: BaseType<any>[]);
    getAttributeValue(name: string): any;
    setAttributeValue(name: string, value: any): this;
    toString(): string;
    protected get _bridgeData(): LooseObject;
}
