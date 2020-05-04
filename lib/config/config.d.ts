/// <reference types="node" />
import { Express } from 'express';
import { Server } from 'http';
import { IConfig } from './declare';
export declare class FesJsConfig {
    static config: IConfig;
    static app: Express;
    static server: Server;
    private constructor();
    static setConfig(config: IConfig): void;
    static get Config(): IConfig;
}
export declare const Config: IConfig;
export declare const setConfig: typeof FesJsConfig.setConfig;
