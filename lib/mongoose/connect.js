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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// ------------------------------------------------------
function connect(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { host, port, dbName, user, pass, authDb, config } = options;
        const defaultConfig = Object.assign({ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, config);
        const uri = `mongodb://${host}:${port}`;
        const instance = yield mongoose_1.createConnection(uri, Object.assign(Object.assign({}, defaultConfig), { authSource: authDb || dbName, dbName,
            user,
            pass }));
        instance.on('connected', () => {
            console.log('Connecte to mongodb', dbName);
        });
        instance.on('error', () => {
            console.log('Connect mongodb error', dbName);
        });
        return instance;
    });
}
exports.connect = connect;
