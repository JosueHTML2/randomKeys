"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var resolveChars = require("./util/resolveChars");

function randomKeys(options) {
    options.length = options.length ?? 24;
    options.chars = resolveChars(options.chars) ?? resolveChars("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

    if (options.onlyLowerCase) {
        options.chars = options.chars.toLowerCase();
    }
    if (options.onlyUpperCase) {
        options.chars = options.chars.toUpperCase();
    }
    var result = "";

    for (let i = 0; i < options.length; i++) {
        const index = Math.floor(Math.random() * options.chars.length);
        const char = options.chars[index];

        result += char;
    }

    return result
}

module.exports = randomKeys;