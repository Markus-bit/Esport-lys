"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleStateAction = void 0;
const BridgeAction_1 = require("./BridgeAction");
const HueBridgeModelError_1 = require("../../HueBridgeModelError");
class ScheduleStateAction extends BridgeAction_1.BridgeAction {
    constructor(id) {
        super([], 'PUT');
        this.id = id;
    }
    get address() {
        if (this.id === null || this.id === undefined) {
            return '/schedules';
        }
        return `/schedules/${this.id}`;
    }
    withState(data) {
        // Schedule state not completely known at this time, so just take data here, maybe consider building payloads later on...
        this._state = data;
        return this;
    }
    get body() {
        if (this._state) {
            return this._state;
        }
        throw new HueBridgeModelError_1.HueBridgeModelError('No state has been set on the Rule Action');
    }
}
exports.ScheduleStateAction = ScheduleStateAction;
;
