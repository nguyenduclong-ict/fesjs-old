"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extra_1 = require("../extra");
const defaultConfig = {
    dirroot: '',
    env: {
        PORT: 3000,
        NODE_ENV: 'development',
        UPLOAD_PATH: 'uploads',
        BCRYPT_SALT_ROUNDS: 10,
        JWT_SECRET: 'xztawer@~',
    },
    database: [],
};
class FesJsConfig {
    constructor() { }
    static setConfig(config) {
        if (!this.config) {
            this.config = defaultConfig;
        }
        extra_1.assignObject(process.env, config.env);
        extra_1.assignObject(this.config, config);
    }
    static get Config() {
        if (!this.config) {
            this.config = defaultConfig;
        }
        return this.config;
    }
}
exports.FesJsConfig = FesJsConfig;
exports.Config = FesJsConfig.Config;
exports.setConfig = FesJsConfig.setConfig;
