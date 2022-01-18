const persianMaping = require("../persian-maping.json");

const normalizeText = (text) => {
  if (text && text !== "") {
    let normalized = text;

    normalized = text
      .split("")
      .map(function (c) {
        const mapped = persianMaping[c.charCodeAt(0)];
        return typeof mapped === "undefined" ? " " : mapped;
      })
      .join("");

    normalized = __removeWhiteSpaces(normalized);
    normalized = __removeHalfSpaces(normalized);
    normalized = __removeTashdid(normalized);
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

const __removeTashdid = (text) => {
  return text.replace(/[\u0651]/g, "");
};

// module.exports = normalizeText;
export default normalizeText;
