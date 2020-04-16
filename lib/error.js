"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FesError extends Error {
    constructor(message, code, data) {
        super();
        this.message = message;
        this.code = code || 500;
        this.data = data;
    }
}
exports.FesError = FesError;
function handleFesError(err, req, res, next) {
    if (err instanceof FesError) {
        console.log('FesError', err);
        if (err.data) {
            return res.status(err.code).json(err.data);
        }
        return res.status(err.code).send(err.message);
    }
    res.status(err.status || 500).send(err.message);
}
exports.handleFesError = handleFesError;
