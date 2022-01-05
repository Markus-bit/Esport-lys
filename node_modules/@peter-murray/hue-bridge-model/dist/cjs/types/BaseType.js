"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseType = exports.isValueDefined = void 0;
function isValueDefined(value) {
    return value !== null && value !== undefined && value !== Number.NaN;
}
exports.isValueDefined = isValueDefined;
class BaseType {
    constructor(config) {
        if (!config.name) {
            throw new TypeError('A name must be specified');
        }
        // this._name = config.name;
        this.name = config.name;
        if (!config.type) {
            throw new TypeError('A type must be specified');
        }
        this.type = config.type;
        // Optional configuration values
        this.optional = Boolean(isValueDefined(config.optional) ? config.optional : true);
        this.defaultValue = isValueDefined(config.defaultValue) ? config.defaultValue : null; // null is considered unset in a Type
    }
    hasDefaultValue() {
        return isValueDefined(this.defaultValue);
    }
    getValue(val) {
        if (isValueDefined(val)) {
            return this._convertToType(val);
        }
        else {
            if (this.hasDefaultValue()) {
                return this._convertToType(this.defaultValue);
            }
            else {
                if (this.optional) {
                    // Value not defined (i.e. null or undefined or Number.NaN)
                    return null;
                }
                else {
                    throw new TypeError(`No value provided and '${this.name}' is not optional`);
                }
            }
        }
    }
    _convertToType(val) {
        return val;
    }
}
exports.BaseType = BaseType;
