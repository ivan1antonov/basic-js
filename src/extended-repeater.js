const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (typeof options.repeatTimes === 'number') {
    for (let i = 0; i < options.repeatTimes; i++) {
      i === 0 ? res += String(str) : res += (options.separator ? options.separator : '+') + String(str);

      if (options.addition !== undefined){
        for (let j = 0 ; j < options.additionRepeatTimes; j++) {
          j === 0 ? res += String(options.addition) : res += (options.additionSeparator ? options.additionSeparator : '|') + String(options.addition);
        }
      }

    }
  }
  return res || String(str);
}

module.exports = {
  repeater
};
