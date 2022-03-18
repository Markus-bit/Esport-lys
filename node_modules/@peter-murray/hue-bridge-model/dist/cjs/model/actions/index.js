"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAction = void 0;
const BridgeAction_1 = require("./BridgeAction");
const LightStateAction_1 = require("./LightStateAction");
const GroupStateAction_1 = require("./GroupStateAction");
const HueBridgeModelError_1 = require("../../HueBridgeModelError");
const SensorStateAction_1 = require("./SensorStateAction");
const ScheduleStateAction_1 = require("./ScheduleStateAction");
const SceneAction_1 = require("./SceneAction");
const REGEX_GROUP_ACTION = /\/groups\/(.*)\/action/, REGEX_SENSOR_ACTION = /\/sensors\/(.*)\/state/, REGEX_LIGHT_ACTION = /\/lights\/(.*)\//, REGEX_SCHEDULE_ACTION = /\/schedules\/(.*)/, REGEX_SCHEDULES = /\/schedules$/, REGEX_SCENE_ACTION = /\/scenes\/(.*)/;
function createAction(data) {
    if (data instanceof BridgeAction_1.BridgeAction) {
        return data;
    }
    else if (data.address) {
        if (REGEX_GROUP_ACTION.exec(data.address)) {
            return createGroupAction(data.address, data.body);
        }
        else if (REGEX_LIGHT_ACTION.exec(data.address)) {
            return createLightStateAction(data.address, data.body);
        }
        else if (REGEX_SENSOR_ACTION.exec(data.address)) {
            return createSensorStateAction(data.address, data.body);
        }
        else if (REGEX_SCENE_ACTION.exec(data.address)) {
            return createSceneAction(data.address, data.body);
        }
        else if (REGEX_SCHEDULE_ACTION.exec(data.address)) {
            return createScheduleAction(data.address, data.body);
        }
        else if (REGEX_SCHEDULES.exec(data.address)) {
            return createSchedulesAction(data.address, data.body);
        }
        else {
            throw new HueBridgeModelError_1.HueBridgeModelError(`Failed to match an action to the address ${data.address}`);
        }
    }
    else {
        throw new HueBridgeModelError_1.HueBridgeModelError('No address property for action');
    }
}
exports.createAction = createAction;
function createLightStateAction(address, body) {
    const match = REGEX_LIGHT_ACTION.exec(address);
    if (!match) {
        throw new HueBridgeModelError_1.HueBridgeModelError(`Invalid address value for light state action '${address}'`);
    }
    const id = match[1];
    return new LightStateAction_1.LightStateAction(id).withState(body);
}
function createGroupAction(address, body) {
    const match = REGEX_GROUP_ACTION.exec(address);
    if (!match) {
        throw new HueBridgeModelError_1.HueBridgeModelError(`Invalid address value for group action '${address}'`);
    }
    const group = match[1];
    return new GroupStateAction_1.GroupStateAction(group).withState(body);
}
function createSensorStateAction(address, body) {
    const match = REGEX_SENSOR_ACTION.exec(address);
    if (!match) {
        throw new HueBridgeModelError_1.HueBridgeModelError(`Invalid address value for sensor state action '${address}'`);
    }
    const id = match[1];
    return new SensorStateAction_1.SensorStateAction(id).withState(body);
}
function createScheduleAction(address, body) {
    const match = REGEX_SCHEDULE_ACTION.exec(address);
    if (!match) {
        throw new HueBridgeModelError_1.HueBridgeModelError(`Invalid address value for schedule action '${address}'`);
    }
    const id = match[1];
    return new ScheduleStateAction_1.ScheduleStateAction(id).withState(body);
}
function createSchedulesAction(address, body) {
    const match = REGEX_SCHEDULES.exec(address);
    if (!match) {
        throw new HueBridgeModelError_1.HueBridgeModelError(`Not a valid schedules action, '${address}'`);
    }
    return new ScheduleStateAction_1.ScheduleStateAction().withState(body);
}
function createSceneAction(address, body) {
    const match = REGEX_SCENE_ACTION.exec(address);
    if (!match) {
        throw new HueBridgeModelError_1.HueBridgeModelError(`Invalid address value for scenes action '${address}'`);
    }
    const id = match[1];
    return new SceneAction_1.SceneAction(id).withState(body);
}
