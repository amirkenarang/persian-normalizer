import * as numbersMaping from "../utf8-codes/number-maping.json";
import { persianToEnglishNumber } from "../numbers";
import { removeSpaces } from "../spaces";
import * as parsianMaping from "../utf8-codes/persian-maping.json";

/**
 *
 * @param text String
 * @returns {String}
 * @description This function remove all not-persian characters from text. and convert arabic characters to persian.
 */
const normalizePersianText = (text: string): string => {
  if (!text || text === "") return;

  let normalized = text.toString();

  normalized = normalized
    .toString()
    .split("")
    .map(function (c) {
      const mapped = parsianMaping[c.charCodeAt(0)];
      return typeof mapped === "undefined" ? "" : mapped;
    })
    .join("");

  // Remove Tashdid
  normalized = normalized.replace(/[\u0651]/g, "");

  return normalized;
};

/**
 *
 * @param text String
 * @returns {String}
 * @description This function create a text for persian search. remove spaces. Convert persian numbers to english. Convert arabic characters to persian.
 */
const createSearchField = (text: string): string => {
  if (!text || text === "") return;
  let normalized = text.toString();

  normalized = normalized
    .toString()
    .split("")
    .map(function (c) {
      const mapped =
        parsianMaping[c.charCodeAt(0)] ||
        numbersMaping[c.charCodeAt(0)] ||
        isEnglishCharacter(c);
      return typeof mapped === "undefined" ? c : mapped;
    })
    .join("");

  normalized = removeSpaces(normalized);
  normalized = persianToEnglishNumber(normalized);

  return normalized;
};

const isEnglishCharacter = (text: string): string => {
  if (!text || text === "") return;
  const english = /^[A-Za-z0-9]*$/;
  return english.test(text) !== false ? text : undefined;
};

/**
 *
 * @param text String
 * @returns {String}
 * @description This function check if text is english or not.
 */
const isEnglish = (text: string): boolean => {
  if (!text || text === "") return;
  for (let char of text) {
    const english = /^[A-Za-z0-9]*$/;
    if (!english.test(char)) {
      return false;
    }
  }
  return true;
};

export { normalizePersianText, createSearchField, isEnglish };
