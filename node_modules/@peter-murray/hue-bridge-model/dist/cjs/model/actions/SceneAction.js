"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneAction = void 0;
const BridgeAction_1 = require("./BridgeAction");
const types_1 = require("../../types");
const Scene_1 = require("../scenes/Scene");
const HueBridgeModelError_1 = require("../../HueBridgeModelError");
const ATTRIBUTES = [
    new types_1.StringType({ name: 'scene' }),
    new types_1.ObjectType({ name: 'body' }),
    new types_1.ObjectType({ name: 'state' }),
];
class SceneAction extends BridgeAction_1.BridgeAction {
    constructor(scene) {
        super(ATTRIBUTES, 'PUT');
        this.withScene(scene);
    }
    get address() {
        return `/scenes/${this.scene}`;
    }
    get scene() {
        return this.getAttributeValue('scene');
    }
    withScene(value) {
        if (value instanceof Scene_1.Scene) {
            this.setAttributeValue('scene', value.id);
        }
        else {
            this.setAttributeValue('scene', value);
        }
    }
    withState(data) {
        // Sensor state varies wildly, so just take data here, maybe consider building payloads later on...
        this.setAttributeValue('state', data);
        return this;
    }
    get body() {
        const state = this.getAttributeValue('state');
        if (state) {
            return state;
        }
        throw new HueBridgeModelError_1.HueBridgeModelError('No state has been set on the SceneAction');
    }
}
exports.SceneAction = SceneAction;
;
