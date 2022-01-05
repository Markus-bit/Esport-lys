"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightScene = void 0;
const Scene_1 = require("./Scene");
const types_1 = require("../../types");
const ATTRIBUTES = [
    new types_1.ListType({ name: 'lights', minEntries: 1, entryType: new types_1.StringType({ name: 'lightId' }) }),
    new types_1.ObjectType({ name: 'lightstates' }),
];
class LightScene extends Scene_1.Scene {
    constructor(id) {
        super(ATTRIBUTES, 'LightScene', id);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
    set lights(lightIds) {
        this.setAttributeValue('lights', lightIds);
    }
    get lightstates() {
        return this.getAttributeValue('lightstates');
    }
    set lightstates(value) {
        this.setAttributeValue('lightstates', value);
    }
}
exports.LightScene = LightScene;
