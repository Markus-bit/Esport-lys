"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const Group_1 = require("./Group");
const types_1 = require("../../types");
const ATTRIBUTES = [
    new types_1.StringType({ name: 'type', defaultValue: 'Room' }),
    new types_1.ChoiceType({ name: 'class', defaultValue: 'Other', validValues: Group_1.Group.getAllGroupClasses() }),
    new types_1.ListType({ name: 'lights', minEntries: 0, entryType: new types_1.StringType({ name: 'lightId' }) }),
];
class Room extends Group_1.Group {
    constructor(id) {
        super(ATTRIBUTES, id);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
    set lights(value) {
        this.setAttributeValue('lights', value);
    }
    set class(value) {
        this.setAttributeValue('class', value);
    }
    get class() {
        return this.getAttributeValue('class');
    }
}
exports.Room = Room;
