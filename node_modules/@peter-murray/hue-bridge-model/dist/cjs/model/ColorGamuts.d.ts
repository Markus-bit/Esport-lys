export interface ColorGamut {
    red: {
        x: number;
        y: number;
    };
    green: {
        x: number;
        y: number;
    };
    blue: {
        x: number;
        y: number;
    };
}
export declare const COLOR_GAMUTS: {
    [key: string]: ColorGamut;
};
export declare function getColorGamut(value: string): ColorGamut;
