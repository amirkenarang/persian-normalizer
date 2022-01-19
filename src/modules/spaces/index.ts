/**
 *
 * @param {String} text
 * @returns {String}
 * @description This function remove all spaces from text.
 */
const removeSpaces = (text: string): string => {
  if (!text || text === "") return;
  let normalized = text;
  normalized = normalized.replace(/\s+/g, "");
  normalized = normalized.replace(/[\u2000-\u200f]/g, "");
  return normalized;
};

export { removeSpaces };
