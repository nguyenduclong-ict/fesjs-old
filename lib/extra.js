"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function extraObject(object = {}, parent = '') {
    let results = [];
    if (isObject(object)) {
        Object.keys(object).forEach((key) => {
            results.push(...extraObject(object[key], path_1.default.join(parent, key)));
        });
    }
    else {
        results = [
            {
                path: parent,
                value: object,
            },
        ];
    }
    return results;
}
exports.extraObject = extraObject;
function isObject(value) {
    return typeof value === 'object' && !Array.isArray(value);
}
exports.isObject = isObject;
function set(object, path, value) {
    if (!isObject(object))
        return;
    path = Array.isArray(path) ? path : path.split(/\/|\./);
    while (path.length > 1) {
        const key = path.shift();
        object[key] = object[key] || {};
        object = object[key];
    }
    object[path.shift()] = value;
}
exports.set = set;
function assignObject(target, source) {
    extraObject(source).forEach((item) => {
        set(target, item.path, item.value);
    });
}
exports.assignObject = assignObject;
