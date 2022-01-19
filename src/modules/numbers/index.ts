import * as numbersMaping from "../utf8-codes/number-maping.json";
import { removeSpaces } from "../spaces";

/**
 * @param {String} text
 * @returns {String}
 * @description Convert All numbers including Persian and Arabic numbers to English numbers.
 * This function keep characters that are not numbers.
 */
const persianToEnglishNumber = (text: string): string => {
  if (!text || text === "") return;
  let normalized = text;

  // Arabic digits
  normalized = normalized.replace(/[\u0660-\u0669]/g, function (c) {
    return (c.charCodeAt(0) - 0x0660).toString();
  });

  // Persian digits
  normalized = normalized.replace(/[\u06f0-\u06f9]/g, function (c) {
    return (c.charCodeAt(0) - 0x0660).toString();
  });
  return normalized;
};

/**
 * @param {String} text
 * @returns {String} text
 * @descriptions Into the json file,
 * - First one is english unicode,
 * - Seocnd One is persian unicode
 * - Third one is arabic unicode
 */
const extractNumbers = (text: string): string => {
  if (!text || text === "") return;
  let normalized = text;

  normalized = text
    .split("")
    .map(function (c) {
      const mapped = numbersMaping[c.charCodeAt(0)];
      return typeof mapped === "undefined" ? "" : mapped;
    })
    .join("");

  normalized = removeSpaces(normalized);
  return normalized;
};
export { persianToEnglishNumber, extractNumbers };
