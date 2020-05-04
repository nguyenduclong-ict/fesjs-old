/// <reference types="node" />
import { IConfig } from '@lib/config';
import express, { Express } from 'express';
import http, { Server } from 'http';
declare function start(): Promise<{
    app?: Express;
    server?: Server;
}>;
export declare function createServer(config: IConfig, app?: Express, server?: Server): {
    app: express.Express;
    server: http.Server;
    start: typeof start;
};
export {};
