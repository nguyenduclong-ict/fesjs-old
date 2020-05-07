import { ConnectionOptions } from 'mongoose';
declare type ConnectOptions = {
    host: string;
    port: string | number;
    dbName: string;
    user: string;
    pass: string;
    authDb?: string;
    config: ConnectionOptions;
};
export declare function connect(options: ConnectOptions): import("mongoose").Connection & {
    then: <TResult1 = import("mongoose").Connection, TResult2 = never>(onfulfilled?: (value: import("mongoose").Connection) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>) => Promise<TResult1 | TResult2>;
    catch: <TResult = never>(onrejected?: (reason: any) => TResult | PromiseLike<TResult>) => Promise<import("mongoose").Connection | TResult>;
};
export {};
