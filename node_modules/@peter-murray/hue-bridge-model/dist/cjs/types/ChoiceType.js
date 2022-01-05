"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceType = void 0;
const BaseType_1 = require("./BaseType");
class ChoiceType extends BaseType_1.BaseType {
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
exports.ChoiceType = ChoiceType;
;
