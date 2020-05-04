export declare function extraObject(object?: {}, parent?: string): {
    path: string;
    value: any;
}[];
export declare function isObject(value: any): boolean;
export declare function set(object: object, path: string[] | string, value: any): void;
export declare function assignObject(target: object, source: object): void;
export declare function debounce(func: any, wait: number): (...args: any[]) => void;
export declare function replaceString(template: string, ...args: any[]): string;
export declare function nowTime(): string;
export declare function omit(object: any, omitValues?: string[]): any;
export declare function makeUrl(url: string | string[], query?: {
    [x: string]: any;
}): string;
export declare function pick(obj: any, properties?: any[]): {};
