"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
const types_1 = require("../../types");
const BridgeObjectWithId_1 = require("../BridgeObjectWithId");
const COMMON_ATTRIBUTES = [
    new types_1.UInt8Type({ name: 'id' }),
    new types_1.StringType({ name: 'name' }),
    new types_1.StringType({ name: 'type' }),
    new types_1.StringType({ name: 'modelid' }),
    new types_1.StringType({ name: 'manufacturername' }),
    new types_1.StringType({ name: 'uniqueid' }),
    new types_1.StringType({ name: 'swversion' }),
    new types_1.StringType({ name: 'swconfigid' }),
    new types_1.ObjectType({ name: 'capabilities' }),
    // TODO this is for zllswitch, need to check other z** sensors and refactor accordingly
    new types_1.StringType({ name: 'productname' }),
    new types_1.ObjectType({ name: 'swupdate' }),
    new types_1.StringType({ name: 'diversityid' }),
    //TODO this is for CLIP, need to inject this in the constructor
    new types_1.BooleanType({ name: 'recycle' }),
];
const COMMON_STATE_ATTRIBUTES = [
    new types_1.StringType({ name: 'lastupdated', defaultValue: 'none' }),
];
const COMMON_CONFIG_ATTRIBUTES = [
    new types_1.BooleanType({ name: 'on', defaultValue: true }),
];
class Sensor extends BridgeObjectWithId_1.BridgeObjectWithId {
    //TODO consider removing data from here as we have _populate to do this
    constructor(configAttributes, stateAttributes, id, data) {
        const stateAttribute = new types_1.ObjectType({
            name: 'state',
            types: [...COMMON_STATE_ATTRIBUTES, ...stateAttributes]
        }), configAttribute = new types_1.ObjectType({
            name: 'config',
            types: [...COMMON_CONFIG_ATTRIBUTES, ...configAttributes]
        }), allAttributes = [...COMMON_ATTRIBUTES, stateAttribute, configAttribute];
        super(allAttributes, id);
        if (data) {
            this._populate(data);
        }
        // inject the name of the class as the type for the sensor
        this.setAttributeValue('type', this.constructor.name);
        this._configAttributes = {};
        // @ts-ignore
        configAttribute.types.forEach(attr => {
            this._configAttributes[attr.name] = attr;
        });
        this._stateAttributes = {};
        // @ts-ignore
        stateAttribute.types.forEach(attr => {
            this._stateAttributes[attr.name] = attr;
        });
    }
    set name(value) {
        this.setAttributeValue('name', value);
    }
    get name() {
        return this.getAttributeValue('name');
    }
    get modelid() {
        return this.getAttributeValue('modelid');
    }
    get manufacturername() {
        return this.getAttributeValue('manufacturername');
    }
    get swversion() {
        return this.getAttributeValue('swversion');
    }
    get swconfigid() {
        return this.getAttributeValue('swconfigid');
    }
    get type() {
        return this.getAttributeValue('type');
    }
    get uniqueid() {
        return this.getAttributeValue('uniqueid');
    }
    get capabilities() {
        return this.getAttributeValue('capabilities');
    }
    get lastupdated() {
        return this.getStateAttributeValue('lastupdated');
    }
    get on() {
        return this.getConfigAttributeValue('on');
    }
    set on(value) {
        this._updateConfigAttributeValue('on', value);
    }
    getConfig() {
        return this.getAttributeValue('config');
    }
    getConfigAttribute(name) {
        return this._configAttributes[name];
    }
    getStateAttribute(name) {
        return this._stateAttributes[name];
    }
    getStateAttributeNames() {
        return Object.keys(this._stateAttributes);
    }
    getConfigAttributeValue(name) {
        const config = this.getAttributeValue('config'), definition = this.getConfigAttribute(name);
        if (definition) {
            return definition.getValue(config[name]);
        }
        else {
            const value = config[name];
            if (value !== undefined) {
                return value;
            }
        }
        return null;
    }
    getStateAttributeValue(name) {
        const state = this.getAttributeValue('state'), definition = this.getStateAttribute(name);
        if (definition) {
            return definition.getValue(state[name]);
        }
        else {
            const value = state[name];
            if (value !== undefined) {
                return value;
            }
        }
        return null;
    }
    _updateStateAttributeValue(name, value) {
        let state = this.getAttributeValue('state') || {};
        state[name] = value;
        // The object we are working on is a copy, so we need to set it back on the sensor, which will use the types to validate
        return this.setAttributeValue('state', state);
    }
    _updateConfigAttributeValue(name, value) {
        const config = this.getAttributeValue('config') || {};
        config[name] = value;
        // The object we are working on is a copy, so we need to set it back on the sensor, which will use the types to validate
        return this.setAttributeValue('config', config);
    }
    getHuePayload() {
        const data = super.getHuePayload();
        Sensor.removeNullValues(data.config);
        Sensor.removeNullValues(data.state);
        return data;
    }
    //TODO util function
    static removeNullValues(data) {
        if (data) {
            Object.keys(data).forEach(key => {
                // @ts-ignore
                const value = data[key];
                if (value === null) {
                    // @ts-ignore
                    delete data[key];
                }
            });
        }
    }
}
exports.Sensor = Sensor;
