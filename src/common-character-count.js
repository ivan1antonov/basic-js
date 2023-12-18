const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = 0;
  for (let i = 0; i < s1.length; i++) {
    let findIndex = s2.indexOf(s1[i]);
    if(findIndex >= 0) {
      s2 = s2.substring(0, findIndex) + s2.substring(findIndex + 1);
      common += 1;
    }
  }
  return common;
}

module.exports = {
  getCommonCharacterCount
};
