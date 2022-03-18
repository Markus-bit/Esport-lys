"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luminaire = void 0;
const Group_1 = require("./Group");
const types_1 = require("../../types");
const ATTRIBUTES = [
    new types_1.StringType({ name: 'type', defaultValue: 'Luminaire' }),
    new types_1.ListType({ name: 'lights', minEntries: 1, entryType: new types_1.StringType({ name: 'lightId' }) }),
];
class Luminaire extends Group_1.Group {
    constructor(id) {
        super(ATTRIBUTES, id);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
}
exports.Luminaire = Luminaire;
