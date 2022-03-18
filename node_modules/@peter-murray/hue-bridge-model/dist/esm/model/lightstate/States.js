import { UInt8Type } from '../../types';
import { HueBridgeModelError } from '../../HueBridgeModelError';
import stateTypes from './stateTypes';
const PERCENTAGE = new UInt8Type({ name: 'percentage', min: 0, max: 100 }), DEGREES = new UInt8Type({ name: 'degrees', min: 0, max: 360 });
export class States {
    constructor(attributes) {
        const states = {};
        attributes.forEach(attribute => {
            // @ts-ignore
            const parameter = stateTypes[attribute];
            if (!parameter) {
                throw new HueBridgeModelError(`Unknown Light State Parameter: "${attribute}"`);
            }
            states[attribute] = parameter;
        });
        this._allowedStates = states;
        this._state = {};
        // @ts-ignore
        this.me = this;
    }
    reset() {
        this._state = {};
        return this.me;
    }
    //TODO need to define this data as a type
    getPayload() {
        return Object.assign({}, this._state);
    }
    getAllowedStateNames() {
        //TODO clean this up
        // const names = [];
        //
        // Object.keys(this._allowedStates).forEach(stateDefinition => {
        //   names.push(stateDefinition);
        // });
        //
        // return names;
        return Object.keys(this._allowedStates);
    }
    populate(data) {
        const self = this;
        if (data) {
            Object.keys(data).forEach(key => {
                if (self._allowedStates[key]) {
                    // @ts-ignore
                    self._setStateValue(key, data[key]);
                }
            });
        }
        return self;
    }
    _setStateValue(definitionName, value) {
        const self = this, stateDefinition = self._allowedStates[definitionName];
        if (stateDefinition) {
            // @ts-ignore
            this._state[definitionName] = stateDefinition.getValue(value);
        }
        else {
            throw new HueBridgeModelError(`Attempted to set a state '${definitionName}' that is not one of the allowed states`);
        }
        return this.me;
    }
    _convertPercentageToStateValue(value, stateName, isFloat) {
        return this._convertToStateValue(PERCENTAGE, value, stateName, isFloat);
    }
    _convertDegreesToStateValue(value, stateName, isFloat) {
        return this._convertToStateValue(DEGREES, value, stateName, isFloat);
    }
    _convertToStateValue(range, value, stateName, isFloat) {
        // @ts-ignore
        const stateDefinition = this._allowedStates[stateName], validatedValue = range.getValue(value);
        if (validatedValue === null) {
            return null;
        }
        else if (validatedValue === range.min) {
            return stateDefinition.min;
        }
        else if (validatedValue === range.max) {
            return stateDefinition.max;
        }
        else {
            if (isFloat) {
                // @ts-ignore
                return (stateDefinition.getRange() * validatedValue) / range.max;
            }
            return Math.round((stateDefinition.getRange() * validatedValue) / range.max);
        }
    }
}
//TODO consider removing this is test can pass - TypeScript
//TODO this is now in the utils package
// function flatten(array) {
//   const flattened = [];
//   !(function flat(array) {
//     array.forEach(function (el) {
//       if (Array.isArray(el)) flat(el);
//       else flattened.push(el);
//     });
//   })(array);
//   return flattened;
// }
