export declare function extraObject(object?: {}, parent?: string): {
    path: string;
    value: any;
}[];
export declare function isObject(value: any): boolean;
export declare function set(object: object, path: string[] | string, value: any): void;
export declare function assignObject(target: object, source: object): void;
