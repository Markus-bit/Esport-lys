"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorStateAction = void 0;
const types_1 = require("../../types");
const BridgeAction_1 = require("./BridgeAction");
const Sensor_1 = require("../sensors/Sensor");
const HueBridgeModelError_1 = require("../../HueBridgeModelError");
const ATTRIBUTES = [
    new types_1.UInt8Type({ name: 'sensor' }),
    new types_1.ObjectType({ name: 'body' }),
    new types_1.ObjectType({ name: 'state' }),
];
class SensorStateAction extends BridgeAction_1.BridgeAction {
    constructor(sensor) {
        super(ATTRIBUTES, 'PUT');
        this.withSensor(sensor);
    }
    get address() {
        return `/sensors/${this.sensor}/state`;
    }
    get sensor() {
        return this.getAttributeValue('sensor');
    }
    withSensor(value) {
        if (value instanceof Sensor_1.Sensor) {
            this.setAttributeValue('sensor', value.id);
        }
        else {
            this.setAttributeValue('sensor', value);
        }
    }
    withState(value) {
        // Sensor state varies wildly, so just take data here, maybe consider building payloads later on...
        this.setAttributeValue('state', value);
        return this;
    }
    get body() {
        const state = this.getAttributeValue('state');
        if (state) {
            return state;
        }
        throw new HueBridgeModelError_1.HueBridgeModelError('No state has been set on the SensorStateAction');
    }
}
exports.SensorStateAction = SensorStateAction;
