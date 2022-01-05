import { BridgeObject } from './BridgeObject';
declare type AvailableTotalSummary = {
    available: number;
    total: number;
};
declare type SensorsAvailableTotalSummary = {
    clip: AvailableTotalSummary;
    zll: AvailableTotalSummary;
    zgp: AvailableTotalSummary;
} & AvailableTotalSummary;
declare type ScenesAvailableTotalSummary = {
    lightstates: AvailableTotalSummary;
} & AvailableTotalSummary;
declare type RulesAvailableTotalSummary = {
    conditions: AvailableTotalSummary;
    actions: AvailableTotalSummary;
} & AvailableTotalSummary;
declare type Streaming = {
    channels: number;
} & AvailableTotalSummary;
export declare class Capabilities extends BridgeObject {
    constructor();
    get lights(): AvailableTotalSummary;
    get sensors(): SensorsAvailableTotalSummary;
    get groups(): AvailableTotalSummary;
    get scenes(): ScenesAvailableTotalSummary;
    get schedules(): AvailableTotalSummary;
    get rules(): RulesAvailableTotalSummary;
    get resourceLinks(): AvailableTotalSummary;
    get resourcelinks(): AvailableTotalSummary;
    get streaming(): Streaming;
    get timezones(): string[];
}
export {};
