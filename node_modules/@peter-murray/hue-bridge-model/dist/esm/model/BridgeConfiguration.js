import { BooleanType, ChoiceType, ObjectType, StringType, UInt16Type, UInt8Type } from '../types';
import { BridgeObject } from './BridgeObject';
const ATTRIBUTES = [
    // Modifiable Attributes
    new UInt16Type({ name: 'proxyport' }),
    new StringType({ name: 'proxyaddress', minLength: 0, maxLength: 40 }),
    new StringType({ name: 'name', minLength: 4, maxLength: 16 }),
    new BooleanType({ name: 'linkbutton' }),
    new StringType({ name: 'ipaddress' }),
    new StringType({ name: 'netmask' }),
    new StringType({ name: 'gateway' }),
    new BooleanType({ name: 'dhcp' }),
    new StringType({ name: 'timezone' }),
    new BooleanType({ name: 'touchlink' }),
    new ChoiceType({ name: 'zigbeechannel', validValues: [11, 15, 20, 25] }),
    new StringType({ name: 'UTC' }),
    // R/O attributes
    new StringType({ name: 'localtime' }),
    new ObjectType({
        name: 'swupdate2',
        types: [
            new BooleanType({ name: 'checkforupdate' }),
            new StringType({ name: 'lastchange' }),
            new ChoiceType({
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
            new ObjectType({
                name: 'autoinstall',
                types: [
                    new StringType({ name: 'updatetime' }),
                    new BooleanType({ name: 'on' }),
                ]
            }),
            new ObjectType({
                name: 'bridge',
                types: [
                    new StringType({ name: 'state' }),
                    new StringType({ name: 'lastinstall' }),
                ]
            }),
        ]
    }),
    new ObjectType({ name: 'whitelist' }),
    new BooleanType({ name: 'portalservices' }),
    new StringType({ name: 'portalconnection' }),
    new ObjectType({
        name: 'portalstate',
        types: [
            new BooleanType({ name: 'signedon' }),
            new BooleanType({ name: 'incoming' }),
            new BooleanType({ name: 'outgoing' }),
            new StringType({ name: 'communication' }),
        ]
    }),
    new ObjectType({
        name: 'internetservices',
        types: [
            new ChoiceType({ name: 'internet', validValues: ['connected', 'disconnected'] }),
            new ChoiceType({ name: 'remoteaccess', validValues: ['connected', 'disconnected'] }),
            new ChoiceType({ name: 'time', validValues: ['connected', 'disconnected'] }),
            new ChoiceType({ name: 'swupdate', validValues: ['connected', 'disconnected'] }),
        ]
    }),
    new ObjectType({
        name: 'backup',
        types: [
            new ChoiceType({
                name: 'status',
                validValues: ['idle', 'startmigration', 'fileready_disabled', 'prepare_restore', 'restoring']
            }),
            new UInt8Type({ name: 'errorcode' }),
        ]
    }),
    new StringType({ name: 'apiversion' }),
    new StringType({ name: 'swversion' }),
    new StringType({ name: 'mac' }),
    new StringType({ name: 'modelid' }),
    new StringType({ name: 'bridgeid' }),
    new BooleanType({ name: 'factorynew' }),
    new StringType({ name: 'replacesbridgeid' }),
    new StringType({ name: 'datastoreversion' }),
    new StringType({ name: 'starterkitid' }),
];
export class BridgeConfiguration extends BridgeObject {
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
;
