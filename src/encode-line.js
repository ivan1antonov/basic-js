const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let cur = str[0];
  let j = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]){
      j++;
    } else {
      j === 1 ? res += cur : res += j + cur;
      cur = str[i+1];
      j = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
