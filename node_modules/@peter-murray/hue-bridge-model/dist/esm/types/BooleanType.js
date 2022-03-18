import { BaseType, isValueDefined } from './BaseType';
export class BooleanType extends BaseType {
    constructor(config) {
        super({ ...{ type: 'boolean' }, ...config });
    }
    getValue(val) {
        if (isValueDefined(val)) {
            return Boolean(val);
        }
        else {
            if (this.hasDefaultValue()) {
                return Boolean(this.defaultValue);
            }
            else {
                if (this.optional) {
                    return val;
                }
                else {
                    throw new TypeError(`No value provided and '${this.name}' is not optional`);
                }
            }
        }
    }
}
