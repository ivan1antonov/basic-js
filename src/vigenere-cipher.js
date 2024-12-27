const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(trigger = true) {
    this.trigger = trigger;
    this.varChart = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  encrypt(string, key) {
    if (
      !string ||
      !key ||
      typeof string !== 'string' ||
      typeof key !== 'string'
    ) {
      throw new Error('Incorrect arguments!');
    }

    string = string.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    const result = string.split('').map((char) => {
      if (this.varChart.includes(char)) {
        const encryptedIndex =
          (this.varChart.indexOf(char) +
            this.varChart.indexOf(key[keyIndex % key.length])) %
          this.varChart.length;
        keyIndex++;
        return this.varChart[encryptedIndex];
      }
      return char;
    });

    return this.trigger ? result.join('') : result.reverse().join('');
  }
  decrypt(string, key) {
    if (
      !string ||
      !key ||
      typeof string !== 'string' ||
      typeof key !== 'string'
    ) {
      throw new Error('Incorrect arguments!');
    }

    string = string.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    const result = string.split('').map((char) => {
      if (this.varChart.includes(char)) {
        const decryptedIndex =
          (this.varChart.indexOf(char) -
            this.varChart.indexOf(key[keyIndex % key.length]) +
            this.varChart.length) %
          this.varChart.length;
        keyIndex++;
        return this.varChart[decryptedIndex];
      }
      return char;
    });

    return this.trigger ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
