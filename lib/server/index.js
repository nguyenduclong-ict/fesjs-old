"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const router_1 = require("../router");
const error_1 = require("../error");
const path_1 = __importDefault(require("path"));
const express_1 = __importStar(require("express"));
const http_1 = __importDefault(require("http"));
const morgan_1 = __importDefault(require("morgan"));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const { app, server, dirroot } = config_1.Config;
            // for dev
            app.use(morgan_1.default('dev'));
            // use lib
            app.use(express_1.json());
            app.use(express_1.urlencoded({ extended: true }));
            // init router
            yield router_1.initRoutes(app, path_1.default.join(dirroot, 'routes'));
            // handle Error
            app.use(error_1.handleFesError);
            // start server
            const port = Number(process.env.PORT);
            server.listen(port, () => {
                console.log('Server listen on port', port);
                resolve({ app, server });
            });
        }));
    });
}
function createServer(config, app, server) {
    config_1.setConfig(config);
    config_1.Config.app = app = app || express_1.default();
    config_1.Config.server = server = server || http_1.default.createServer(app);
    return { app, server, start };
}
exports.createServer = createServer;
