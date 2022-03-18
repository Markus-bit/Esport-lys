import { BooleanType, UInt16Type } from '../../types';
import { Sensor } from './Sensor';
const CONFIG_ATTRIBUTES = [
    new UInt16Type({ name: 'tholddark', defaultValue: 16000 }),
    new UInt16Type({ name: 'tholdoffset', min: 1, defaultValue: 7000 }),
];
const STATE_ATTRIBUTES = [
    new UInt16Type({ name: 'lightlevel' }),
    new BooleanType({ name: 'dark' }),
    new BooleanType({ name: 'daylight' }),
];
export class ZLLLightlevel extends Sensor {
    constructor(id) {
        super(CONFIG_ATTRIBUTES, STATE_ATTRIBUTES, id);
    }
    get tholddark() {
        return this.getConfigAttributeValue('tholddark');
    }
    set tholddark(value) {
        this._updateConfigAttributeValue('tholddark', value);
    }
    get thresholdDark() {
        return this.tholddark;
    }
    get tholdoffset() {
        return this.getConfigAttributeValue('tholdoffset');
    }
    set tholdoffset(value) {
        this._updateConfigAttributeValue('tholdoffset', value);
    }
    get thresholdOffset() {
        return this.tholdoffset;
    }
    get lightlevel() {
        return this.getStateAttributeValue('lightlevel');
    }
    set lightlevel(value) {
        this._updateStateAttributeValue('lightlevel', value);
    }
    get dark() {
        return this.getStateAttributeValue('dark');
    }
    //TODO validate we can set this
    // set dark(value) {
    //   return this._updateStateAttributeValue('dark', value);
    // }
    get daylight() {
        return this.getStateAttributeValue('daylight');
    }
}
