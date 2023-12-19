const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let withoutFirst = String(n).slice(1);
  let withoutOther;
  for (let i = 1; i < String(n).length; i++) {
    withoutOther = String(n).substring(0, i) + String(n).substring(i + 1);
    if (withoutFirst < withoutOther) withoutFirst = withoutOther;
  }
  return Number(withoutFirst);
}

module.exports = {
  deleteDigit
};
