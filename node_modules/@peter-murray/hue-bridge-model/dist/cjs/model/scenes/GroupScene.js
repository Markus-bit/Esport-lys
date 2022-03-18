"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupScene = void 0;
const types_1 = require("../../types");
const Scene_1 = require("./Scene");
const ATTRIBUTES = [
    new types_1.StringType({ name: 'group' }),
    new types_1.ListType({ name: 'lights', optional: true, minEntries: 1, entryType: new types_1.StringType({ name: 'lightId' }) }),
    new types_1.ObjectType({ name: 'lightstates' }),
];
class GroupScene extends Scene_1.Scene {
    constructor(id) {
        super(ATTRIBUTES, 'GroupScene', id);
    }
    get group() {
        return this.getAttributeValue('group');
    }
    set group(id) {
        this.setAttributeValue('group', id);
    }
    get lights() {
        return this.getAttributeValue('lights');
    }
    get lightstates() {
        return this.getAttributeValue('lightstates');
    }
}
exports.GroupScene = GroupScene;
