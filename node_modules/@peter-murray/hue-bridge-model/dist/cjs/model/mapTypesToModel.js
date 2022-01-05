"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES_TO_MODEL = void 0;
const Light_1 = require("./Light");
const Capabilities_1 = require("./Capabilities");
const BridgeConfiguration_1 = require("./BridgeConfiguration");
const Entertainment_1 = require("./groups/Entertainment");
const LightGroup_1 = require("./groups/LightGroup");
const Lightsource_1 = require("./groups/Lightsource");
const Luminaire_1 = require("./groups/Luminaire");
const Room_1 = require("./groups/Room");
const Zone_1 = require("./groups/Zone");
const ResourceLink_1 = require("./ResourceLink");
const LightScene_1 = require("./scenes/LightScene");
const GroupScene_1 = require("./scenes/GroupScene");
const Schedule_1 = require("./Schedule");
const Rule_1 = require("./rules/Rule");
const CLIPGenericFlag_1 = require("./sensors/CLIPGenericFlag");
const CLIPGenericStatus_1 = require("./sensors/CLIPGenericStatus");
const CLIPHumidity_1 = require("./sensors/CLIPHumidity");
const CLIPLightlevel_1 = require("./sensors/CLIPLightlevel");
const CLIPOpenClose_1 = require("./sensors/CLIPOpenClose");
const CLIPPresence_1 = require("./sensors/CLIPPresence");
const CLIPSwitch_1 = require("./sensors/CLIPSwitch");
const CLIPTemperature_1 = require("./sensors/CLIPTemperature");
const Daylight_1 = require("./sensors/Daylight");
const ZGPSwitch_1 = require("./sensors/ZGPSwitch");
const ZLLLightlevel_1 = require("./sensors/ZLLLightlevel");
const ZLLPresence_1 = require("./sensors/ZLLPresence");
const ZLLSwitch_1 = require("./sensors/ZLLSwitch");
const ZLLTemperature_1 = require("./sensors/ZLLTemperature");
const GeoFence_1 = require("./sensors/GeoFence");
exports.TYPES_TO_MODEL = {
    light: Light_1.Light,
    capabilities: Capabilities_1.Capabilities,
    configuration: BridgeConfiguration_1.BridgeConfiguration,
    entertainment: Entertainment_1.Entertainment,
    lightgroup: LightGroup_1.LightGroup,
    lightsource: Lightsource_1.Lightsource,
    luminaire: Luminaire_1.Luminaire,
    room: Room_1.Room,
    zone: Zone_1.Zone,
    resourcelink: ResourceLink_1.ResourceLink,
    lightscene: LightScene_1.LightScene,
    groupscene: GroupScene_1.GroupScene,
    schedule: Schedule_1.Schedule,
    rule: Rule_1.Rule,
    clipgenericflag: CLIPGenericFlag_1.CLIPGenericFlag,
    clipgenericstatus: CLIPGenericStatus_1.CLIPGenericStatus,
    cliphumidity: CLIPHumidity_1.CLIPHumidity,
    cliplightlevel: CLIPLightlevel_1.CLIPLightlevel,
    clipopenclose: CLIPOpenClose_1.CLIPOpenClose,
    clippresence: CLIPPresence_1.CLIPPresence,
    clipswitch: CLIPSwitch_1.CLIPSwitch,
    cliptemperature: CLIPTemperature_1.CLIPTemperature,
    daylight: Daylight_1.Daylight,
    zgpswitch: ZGPSwitch_1.ZGPSwitch,
    zlllightlevel: ZLLLightlevel_1.ZLLLightlevel,
    zllpresence: ZLLPresence_1.ZLLPresence,
    zllswitch: ZLLSwitch_1.ZLLSwitch,
    zlltemperature: ZLLTemperature_1.ZLLTemperature,
    geofence: GeoFence_1.GeoFence,
};
