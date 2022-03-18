import { BridgeObject } from './BridgeObject';
declare type SWUpdate2 = {
    checkforupdate: boolean;
    lastchange: string;
    state: string;
    autoinstall: {
        updatetime: string;
        on: boolean;
    };
    bridge: {
        state: string;
        lastinstall: string;
    };
};
declare type InternetServices = {
    internet: string;
    remoteaccess: string;
    time: string;
    swupdate: string;
};
export declare class BridgeConfiguration extends BridgeObject {
    constructor();
    set proxyport(value: number);
    set proxyaddress(value: string);
    set name(value: string);
    set linkbutton(value: boolean);
    set ipaddress(value: string);
    set netmask(value: string);
    set gateway(value: string);
    set dhcp(value: boolean);
    set timezone(value: string);
    set touchlink(value: boolean);
    set zigbeechannel(value: number);
    /**
     * Sets the time in UTC on the bridge, but only if there is internet connection (as it will use the internet for the time)
     * @param value An iso time format
     * @returns {BridgeObject}
     */
    set UTC(value: string);
    get portalservices(): boolean;
    get portalconnection(): string;
    get portalstate(): object;
    get localtime(): string;
    get proxyport(): number;
    get proxyaddress(): string;
    get name(): string;
    get linkbutton(): boolean;
    get ipaddress(): string;
    get netmask(): string;
    get gateway(): string;
    get dhcp(): boolean;
    get timezone(): string;
    get zigbeechannel(): number;
    get UTC(): string;
    get swupdate2(): SWUpdate2;
    get whitelist(): object;
    get internetservices(): InternetServices;
    get backup(): object;
    get apiversion(): string;
    get swversion(): string;
    get mac(): string;
    get modelid(): string;
    get bridgeid(): string;
    get factorynew(): boolean;
    get replacesbridgeid(): string;
    get datastoreversion(): string;
    get starterkitid(): string;
}
export {};
