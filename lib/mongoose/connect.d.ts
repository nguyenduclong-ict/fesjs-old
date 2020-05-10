import mongoose from 'mongoose';
interface ConnectOptions {
    host: string;
    port: string | number;
    dbName: string;
    user: string;
    pass: string;
    authDb?: string;
    config: mongoose.ConnectionOptions;
}
export declare function createConnection(options: ConnectOptions): Promise<mongoose.Connection>;
export declare function connect(options: ConnectOptions): Promise<typeof mongoose>;
export {};
