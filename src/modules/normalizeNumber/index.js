const numberMaping = require("../number-maping.json");

/**
 * @param {String} text
 * @returns English number
 * @desc Into the json file, first number is english unicode,
 * seocnd is persian unicode and third one is arabic unicode
 */
const normalizeNumber = (text) => {
  if (text && text !== "") {
    let normalized = text;

    normalized = text
      .split("")
      .map(function (c) {
        const mapped = numberMaping[c.charCodeAt(0)];
        return typeof mapped === "undefined" ? " " : mapped;
      })
      .join("");

    normalized = __removeWhiteSpaces(normalized);
    normalized = __removeHalfSpaces(normalized);
    return normalized;
  }
  return text;
};

const __removeWhiteSpaces = (text) => {
  return text.replace(/\s+/g, "");
};

const __removeHalfSpaces = (text) => {
  return text.replace(/[\u2000-\u200f]/g, "");
};

module.exports = normalizeNumber;
