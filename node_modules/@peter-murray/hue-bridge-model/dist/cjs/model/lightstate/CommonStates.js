"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonStates = void 0;
const BaseStates_1 = require("./BaseStates");
class CommonStates extends BaseStates_1.BaseStates {
    constructor(attributes) {
        let allAttributes = ['alert',
            'bri_inc',
            'sat_inc',
            'hue_inc',
            'ct_inc',
            'xy_inc'];
        if (attributes) {
            allAttributes = [...allAttributes, ...attributes];
        }
        super(allAttributes);
    }
    alert(value) {
        return this._setStateValue('alert', value);
    }
    bri_inc(inc) {
        return this._setStateValue('bri_inc', inc);
    }
    incrementBrightness(inc) {
        return this.bri_inc(inc);
    }
    sat_inc(inc) {
        return this._setStateValue('sat_inc', inc);
    }
    incrementSaturation(inc) {
        return this.sat_inc(inc);
    }
    hue_inc(inc) {
        return this._setStateValue('hue_inc', inc);
    }
    incrementHue(inc) {
        return this.hue_inc(inc);
    }
    ct_inc(inc) {
        return this._setStateValue('ct_inc', inc);
    }
    incrementCt(inc) {
        return this.ct_inc(inc);
    }
    incrementColorTemp(inc) {
        return this.ct_inc(inc);
    }
    xy_inc(x_inc, y_inc) {
        if (Array.isArray(x_inc)) {
            this._setStateValue('xy_inc', x_inc);
        }
        else {
            this._setStateValue('xy_inc', [x_inc, y_inc]);
        }
        return this.me;
    }
    alertLong() {
        return this.alert('lselect');
    }
    alertShort() {
        return this.alert('select');
    }
    alertNone() {
        return this.alert('none');
    }
}
exports.CommonStates = CommonStates;
