import { BaseType } from './BaseType';
export class ChoiceType extends BaseType {
    constructor(config) {
        super({ ...{ type: 'choice' }, ...config });
        //TODO this may not be necessary with TypeScript
        // const validValues = config.validValues;
        // if (!isValueDefined(validValues)) {
        //   throw new TypeError('validValues config property is required for choice type');
        // }
        this.validValues = config.validValues;
    }
    _convertToType(val) {
        if (this.validValues.indexOf(val) > -1) {
            return val;
        }
        else {
            throw new TypeError(`Value '${val}' is not one of the allowed values [${this.validValues}]`);
        }
    }
}
;
