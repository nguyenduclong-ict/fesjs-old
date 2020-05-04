/// <reference types="node" />
import { Config } from './lib/config';
import { Express } from 'express';
import { Server } from 'http';
declare function start(): Promise<{
    app?: Express;
    server?: Server;
}>;
declare function beforeStart(f: (Config?: Config, app?: Express, server?: Server) => Promise<void>): {
    start: typeof start;
};
export declare function FesServer(config: Config, app?: Express, server?: Server): {
    beforeStart: typeof beforeStart;
    start: typeof start;
};
export * from './lib/config';
export * from './lib/error';
