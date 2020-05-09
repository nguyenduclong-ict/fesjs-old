import { ConnectionOptions } from 'mongoose';
interface ConnectOptions {
    host: string;
    port: string | number;
    dbName: string;
    user: string;
    pass: string;
    authDb?: string;
    config: ConnectionOptions;
}
export declare function connect(options: ConnectOptions): Promise<import("mongoose").Connection>;
export {};
