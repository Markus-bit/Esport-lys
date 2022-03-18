"use strict";
// TODO Do not have an example of this the API documentation is not correct as it refers to a standard LightGroup definition
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lightsource = void 0;
const Group_1 = require("./Group");
const types_1 = require("../../types");
const ATTRIBUTES = [
    new types_1.StringType({ name: 'type', defaultValue: 'Lightsource' }),
    new types_1.ListType({ name: 'lights', minEntries: 1, entryType: new types_1.StringType({ name: 'lightId' }) }),
];
class Lightsource extends Group_1.Group {
    constructor(id) {
        super(ATTRIBUTES, id);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
}
exports.Lightsource = Lightsource;
