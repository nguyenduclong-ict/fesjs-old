"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
const lodash_1 = require("lodash");
function getColor(name) {
    return colors_1.default[name]['500'] || colors_1.default[name];
}
exports.getColor = getColor;
function randomColor() {
    return getColor(lodash_1.sample(Object.entries(colors_1.default).map((c) => c[0])));
}
exports.randomColor = randomColor;
