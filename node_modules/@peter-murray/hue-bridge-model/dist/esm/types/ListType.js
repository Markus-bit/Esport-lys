import { BaseType } from './BaseType';
import { isValueDefined } from './BaseType';
export class ListType extends BaseType {
    constructor(config) {
        // @ts-ignore
        super({ ...config, type: 'list' });
        this.minEntries = config.minEntries;
        this.maxEntries = config.maxEntries;
        this.entryType = config.entryType;
    }
    getValue(val) {
        // @ts-ignore
        const listValues = super.getValue.apply(this, Array.from(arguments));
        if (!isValueDefined(listValues)) {
            // Validate the min entries requirement is met
            if (this.minEntries === 0) {
                return listValues;
            }
            else {
                throw new TypeError(`BaseType ${this.name}, minEntries requirement not satisfied, required ${this.minEntries}, but have null object`);
            }
        }
        // Value is defined, so validate it according to specification
        // @ts-ignore
        const length = listValues.length;
        if (length < this.minEntries) {
            throw new TypeError(`The number of entries for the list, "${length}" is less than required minimum of ${this.minEntries}`);
        }
        if (this.maxEntries && length > this.maxEntries) {
            throw new TypeError(`The number of entries for the list, ${length}, is greater than required maximum of ${this.maxEntries}`);
        }
        return listValues;
    }
    ;
    _convertToType(val) {
        if (!isValueDefined(val)) {
            return null;
        }
        const result = [], type = this.entryType;
        if (Array.isArray(val)) {
            val.forEach(value => {
                result.push(type.getValue(value));
            });
        }
        else {
            result.push(type.getValue(val));
        }
        // @ts-ignore
        return result;
    }
}
