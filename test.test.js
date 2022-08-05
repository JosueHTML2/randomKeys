var randomKeys = require("./index");

console.log(randomKeys.default({ length: 24, chars: ["012345678", "9abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"], onlyUpperCase: true }));