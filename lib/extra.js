"use strict";
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
const path_1 = __importDefault(require("path"));
const querystring_1 = __importDefault(require("querystring"));
const _ = __importStar(require("lodash"));
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
function debounce(func, wait) {
    const timeouts = {};
    return function (...args) {
        const context = this;
        const { key, now } = args.pop() || {};
        if (timeouts[key])
            clearTimeout(timeouts[key]);
        if (now) {
            func.apply(context, args);
        }
        else {
            const later = () => {
                timeouts[key] = null;
                func.apply(context, args);
            };
            timeouts[key] = setTimeout(later, wait);
        }
    };
}
exports.debounce = debounce;
function replaceString(template, ...args) {
    args.forEach((value, index) => {
        template = template.replace(new RegExp(`\\$${index + 1}`, 'g'), value);
    });
    return template;
}
exports.replaceString = replaceString;
function nowTime() {
    const now = new Date();
    return replaceString('$1/$2/$3 $4:$5:$6', now.getDate(), now.getMonth(), now.getFullYear(), now.getHours(), now.getMinutes(), now.getSeconds());
}
exports.nowTime = nowTime;
function omit(object, omitValues = ['', undefined, null]) {
    Object.keys(object).forEach((key) => {
        if (omitValues.includes(key) || omitValues.includes(object[key])) {
            delete object[key];
        }
    });
    return object;
}
exports.omit = omit;
function makeUrl(url, query = {}) {
    url = typeof url === 'string' ? [url] : url;
    url = url.map((item) => item.replace(/^\/|\/$/g, '')).join('/');
    const q = querystring_1.default.stringify(query);
    return [url, q].filter((e) => e !== '').join('?');
}
exports.makeUrl = makeUrl;
function pick(obj, properties = []) {
    const data = {};
    properties.forEach((property) => {
        _.set(data, property, _.get(obj, property));
    });
    return data;
}
exports.pick = pick;
