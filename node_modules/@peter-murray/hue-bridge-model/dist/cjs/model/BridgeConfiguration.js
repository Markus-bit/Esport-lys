"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeConfiguration = void 0;
const types_1 = require("../types");
const BridgeObject_1 = require("./BridgeObject");
const ATTRIBUTES = [
    // Modifiable Attributes
    new types_1.UInt16Type({ name: 'proxyport' }),
    new types_1.StringType({ name: 'proxyaddress', minLength: 0, maxLength: 40 }),
    new types_1.StringType({ name: 'name', minLength: 4, maxLength: 16 }),
    new types_1.BooleanType({ name: 'linkbutton' }),
    new types_1.StringType({ name: 'ipaddress' }),
    new types_1.StringType({ name: 'netmask' }),
    new types_1.StringType({ name: 'gateway' }),
    new types_1.BooleanType({ name: 'dhcp' }),
    new types_1.StringType({ name: 'timezone' }),
    new types_1.BooleanType({ name: 'touchlink' }),
    new types_1.ChoiceType({ name: 'zigbeechannel', validValues: [11, 15, 20, 25] }),
    new types_1.StringType({ name: 'UTC' }),
    // R/O attributes
    new types_1.StringType({ name: 'localtime' }),
    new types_1.ObjectType({
        name: 'swupdate2',
        types: [
            new types_1.BooleanType({ name: 'checkforupdate' }),
            new types_1.StringType({ name: 'lastchange' }),
            new types_1.ChoiceType({
                name: 'state',
                validValues: [
                    'unknown',
                    'noupdates',
                    'transferring',
                    'anyreadytoinstall',
                    'allreadytoinstall',
                    'installing',
                ]
            }),
            new types_1.ObjectType({
                name: 'autoinstall',
                types: [
                    new types_1.StringType({ name: 'updatetime' }),
                    new types_1.BooleanType({ name: 'on' }),
                ]
            }),
            new types_1.ObjectType({
                name: 'bridge',
                types: [
                    new types_1.StringType({ name: 'state' }),
                    new types_1.StringType({ name: 'lastinstall' }),
                ]
            }),
        ]
    }),
    new types_1.ObjectType({ name: 'whitelist' }),
    new types_1.BooleanType({ name: 'portalservices' }),
    new types_1.StringType({ name: 'portalconnection' }),
    new types_1.ObjectType({
        name: 'portalstate',
        types: [
            new types_1.BooleanType({ name: 'signedon' }),
            new types_1.BooleanType({ name: 'incoming' }),
            new types_1.BooleanType({ name: 'outgoing' }),
            new types_1.StringType({ name: 'communication' }),
        ]
    }),
    new types_1.ObjectType({
        name: 'internetservices',
        types: [
            new types_1.ChoiceType({ name: 'internet', validValues: ['connected', 'disconnected'] }),
            new types_1.ChoiceType({ name: 'remoteaccess', validValues: ['connected', 'disconnected'] }),
            new types_1.ChoiceType({ name: 'time', validValues: ['connected', 'disconnected'] }),
            new types_1.ChoiceType({ name: 'swupdate', validValues: ['connected', 'disconnected'] }),
        ]
    }),
    new types_1.ObjectType({
        name: 'backup',
        types: [
            new types_1.ChoiceType({
                name: 'status',
                validValues: ['idle', 'startmigration', 'fileready_disabled', 'prepare_restore', 'restoring']
            }),
            new types_1.UInt8Type({ name: 'errorcode' }),
        ]
    }),
    new types_1.StringType({ name: 'apiversion' }),
    new types_1.StringType({ name: 'swversion' }),
    new types_1.StringType({ name: 'mac' }),
    new types_1.StringType({ name: 'modelid' }),
    new types_1.StringType({ name: 'bridgeid' }),
    new types_1.BooleanType({ name: 'factorynew' }),
    new types_1.StringType({ name: 'replacesbridgeid' }),
    new types_1.StringType({ name: 'datastoreversion' }),
    new types_1.StringType({ name: 'starterkitid' }),
];
class BridgeConfiguration extends BridgeObject_1.BridgeObject {
    constructor() {
        super(ATTRIBUTES);
    }
    set proxyport(value) {
        this.setAttributeValue('proxyport', value);
    }
    set proxyaddress(value) {
        this.setAttributeValue('proxyaddress', value);
    }
    set name(value) {
        this.setAttributeValue('name', value);
    }
    set linkbutton(value) {
        this.setAttributeValue('linkbutton', value);
    }
    set ipaddress(value) {
        this.setAttributeValue('ipaddress', value);
    }
    set netmask(value) {
        this.setAttributeValue('netmask', value);
    }
    set gateway(value) {
        this.setAttributeValue('gateway', value);
    }
    set dhcp(value) {
        this.setAttributeValue('dhcp', value);
    }
    set timezone(value) {
        this.setAttributeValue('timezone', value);
    }
    set touchlink(value) {
        this.setAttributeValue('touchlink', value);
    }
    set zigbeechannel(value) {
        this.setAttributeValue('zigbeechannel', value);
    }
    /**
     * Sets the time in UTC on the bridge, but only if there is internet connection (as it will use the internet for the time)
     * @param value An iso time format
     * @returns {BridgeObject}
     */
    set UTC(value) {
        this.setAttributeValue('UTC', value);
    }
    get portalservices() {
        return this.getAttributeValue('portalservices');
    }
    get portalconnection() {
        return this.getAttributeValue('portalconnection');
    }
    get portalstate() {
        return this.getAttributeValue('portalstate');
    }
    get localtime() {
        return this.getAttributeValue('localtime');
    }
    get proxyport() {
        return this.getAttributeValue('proxyport');
    }
    get proxyaddress() {
        return this.getAttributeValue('proxyaddress');
    }
    get name() {
        return this.getAttributeValue('name');
    }
    get linkbutton() {
        return this.getAttributeValue('linkbutton');
    }
    get ipaddress() {
        return this.getAttributeValue('ipaddress');
    }
    get netmask() {
        return this.getAttributeValue('netmask');
    }
    get gateway() {
        return this.getAttributeValue('gateway');
    }
    get dhcp() {
        return this.getAttributeValue('dhcp');
    }
    get timezone() {
        return this.getAttributeValue('timezone');
    }
    get zigbeechannel() {
        return this.getAttributeValue('zigbeechannel');
    }
    get UTC() {
        return this.getAttributeValue('UTC');
    }
    get swupdate2() {
        return this.getAttributeValue('swupdate2');
    }
    get whitelist() {
        return this.getAttributeValue('whitelist');
    }
    get internetservices() {
        return this.getAttributeValue('internetservices');
    }
    get backup() {
        return this.getAttributeValue('backup');
    }
    get apiversion() {
        return this.getAttributeValue('apiversion');
    }
    get swversion() {
        return this.getAttributeValue('swversion');
    }
    get mac() {
        return this.getAttributeValue('mac');
    }
    get modelid() {
        return this.getAttributeValue('modelid');
    }
    get bridgeid() {
        return this.getAttributeValue('bridgeid');
    }
    get factorynew() {
        return this.getAttributeValue('factorynew');
    }
    get replacesbridgeid() {
        return this.getAttributeValue('replacesbridgeid');
    }
    get datastoreversion() {
        return this.getAttributeValue('datastoreversion');
    }
    get starterkitid() {
        return this.getAttributeValue('starterkitid');
    }
}
exports.BridgeConfiguration = BridgeConfiguration;
;
