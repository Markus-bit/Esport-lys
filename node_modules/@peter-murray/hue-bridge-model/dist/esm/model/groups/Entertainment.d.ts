import { Group } from './Group';
export declare type Stream = {
    proxymode: string;
    proxynode: string;
    active: boolean;
    owner?: string;
};
/**
 * A Group of lights that can be utilized in an Entertainment situation for streaming.
 *
 * There are limitations on which lights can be added to an Entertainment Group, as they need to support the ability
 * to stream, which requires newer lights in the hue ecosystem.
 */
export declare class Entertainment extends Group {
    constructor(id?: number | string);
    set lights(value: string[]);
    get lights(): string[];
    set class(value: string);
    get class(): string;
    get stream(): Stream;
    get locations(): object;
}
