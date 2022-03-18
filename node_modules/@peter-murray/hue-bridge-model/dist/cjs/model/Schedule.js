"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const BridgeObjectWithId_1 = require("./BridgeObjectWithId");
const types_1 = require("../types");
const ATTRIBUTES = [
    new types_1.UInt8Type({ name: 'id' }),
    new types_1.StringType({ name: 'name', minLength: 0, maxLength: 32, optional: true }),
    new types_1.StringType({ name: 'description', minLength: 0, maxLength: 64, optional: true }),
    new types_1.ObjectType({
        name: 'command',
        optional: false,
        types: [
            new types_1.StringType({ name: 'address', optional: false }),
            new types_1.ChoiceType({ name: 'method', optional: false, validValues: ['POST', 'PUT', 'DELETE'] }),
            new types_1.ObjectType({ name: 'body', optional: false }),
        ],
    }),
    new types_1.StringType({ name: 'time' }),
    new types_1.TimePatternType({ name: 'localtime' }),
    new types_1.StringType({ name: 'created' }),
    new types_1.ChoiceType({ name: 'status', validValues: ['enabled', 'disabled'], defaultValue: 'enabled' }),
    new types_1.BooleanType({ name: 'autodelete' }),
    new types_1.BooleanType({ name: 'recycle', defaultValue: false }),
    new types_1.StringType({ name: 'starttime' }),
];
class Schedule extends BridgeObjectWithId_1.BridgeObjectWithId {
    constructor(id) {
        super(ATTRIBUTES, id);
    }
    get name() {
        return this.getAttributeValue('name');
    }
    set name(value) {
        this.setAttributeValue('name', value);
    }
    get description() {
        return this.getAttributeValue('description');
    }
    set description(value) {
        this.setAttributeValue('description', value);
    }
    get command() {
        return this.getAttributeValue('command');
    }
    set command(value) {
        this.setAttributeValue('command', value);
    }
    get time() {
        return this.getAttributeValue('time');
    }
    get localtime() {
        return this.getAttributeValue('localtime');
    }
    set localtime(value) {
        this.setAttributeValue('localtime', value);
    }
    get status() {
        return this.getAttributeValue('status');
    }
    set status(value) {
        this.setAttributeValue('status', value);
    }
    get autodelete() {
        return this.getAttributeValue('autodelete');
    }
    set autodelete(value) {
        this.setAttributeValue('autodelete', value);
    }
    get recycle() {
        return this.getAttributeValue('recycle');
    }
    set recycle(value) {
        this.setAttributeValue('recycle', value);
    }
    get created() {
        return this.getAttributeValue('created');
    }
}
exports.Schedule = Schedule;
