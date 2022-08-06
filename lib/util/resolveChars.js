const { __esModule } = require("../random-keys");

function resolveChars(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        result += resolveChar(array[i]);
    }
    return result;
}

function resolveChar(char) {
    if (!char || char.length === 0)
        throw new Error("invalid char");
    if (typeof char !== "string")
        throw new Error("everychar must be a string");

    var result = "";

    result += char;

    return result;
}

module.exports = resolveChars;