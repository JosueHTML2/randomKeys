"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var resolveChars = require("./util/resolveChars");

function randomKeys(options) {
    typeof options !== "object" ? options = { chars: resolveChars(options), keyLength: options.length } : options = options || {};
    options.keyLength = options.keyLength || 12;
    options.chars = ((options.chars && typeof options === "object") ? resolveChars(options.chars) : undefined) ?? resolveChars("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

    if (options.onlyLowerCase) {
        options.chars = options.chars.toLowerCase();
    }
    if (options.onlyUpperCase) {
        options.chars = options.chars.toUpperCase();
    }
    var result = "";

    for (let i = 0; i < options.keyLength; i++) {
        const index = Math.floor(Math.random() * options.chars.length);
        const char = options.chars[index];

        result += char;
    }
    return result
}

module.exports = randomKeys;