"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// ------------------------------------------------------
function connect({ host, port, dbName, user, pass, authDb, config, }) {
    const defaultConfig = Object.assign({ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, config);
    const uri = `mongodb://${host}:${port}`;
    return mongoose_1.createConnection(uri, Object.assign(Object.assign({}, defaultConfig), { authSource: authDb || dbName, dbName,
        user,
        pass }));
}
exports.connect = connect;
