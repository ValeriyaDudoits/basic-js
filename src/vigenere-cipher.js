const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direction) {
    this.directionReverse = direction !== false;
    this.engLang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();

    this.tabulaRecta = [];
    for (let i = 0; i < 26; i++) {
      var shift = i - 26;
      if (shift < 0) {
        shift = shift * -1;
      }
      this.tabulaRecta[i] = new Array();
      for (let j = 0; j < 26; j++) {
        if ((26 - shift) > 25) {
          shift = 26;
        }
        this.tabulaRecta[i].push(this.engLang[26 - shift]);
        shift--;
      }
    }

  }
  encrypt(message, key) {
    let msg = message.toLowerCase();
    var simbolsCount = 0;
    for (let i = 0; i < msg.length; i++) {
      if (this.engLang.indexOf(msg[i]) !== -1) {
        simbolsCount++;
      }
    }

    var needLnght = msg.length;
    var str = [];
    for (var i = 0; i < needLnght; i++) {
      str.push(key);
    }
    var extendedKey = str.join('').slice(0, msg.length);

    var shifr = [];
    var lastIndexSource = 0;
    var lastIndexKey = 0;

    for (let i = 0; i < msg.length; i++) {
      var literaSource = msg[lastIndexSource].toLowerCase();
      var literaKey = extendedKey[lastIndexKey].toLowerCase();

      var column = this.engLang.indexOf(literaSource);
      var row = this.engLang.indexOf(literaKey);

      lastIndexSource++;

      if (column === -1) {

        shifr.push(literaSource);
        continue;
      }

      lastIndexKey++;

      var shifrLitera = this.tabulaRecta[row][column];
      shifr.push(shifrLitera);
    }
    if (this.directionReverse) {
      return shifr.join('').toUpperCase();
    } else {
      return shifr.reverse().join('').toUpperCase();
    }
  }

  decrypt(message, key) {
    let msg = message.toLowerCase();
    var originalText = [];
    var lastMessageLitera = 0;

    var extKey = key.repeat(Math.ceil(msg.length / key.length) + 1);

    for (let i = 0; i < extKey.length; i++) {
      var literaKey = extKey[i].toLowerCase();

      let start = msg[lastMessageLitera];

      while (!this.engLang.includes(start)) {
        originalText.push(start);
        lastMessageLitera++;
        start = msg[lastMessageLitera];
        if (start === undefined) {
          break;
        }
      }

      if (msg.length < lastMessageLitera || start === undefined) {
        break;
      }

      for (let j = 0; j < this.tabulaRecta.length; j++) {

        if (this.tabulaRecta[j][0] === literaKey) {
          for (let z = 0; z < this.tabulaRecta[j].length; z++) {
            if (this.tabulaRecta[j][z] === start) {
              start = this.engLang[z];
              originalText.push(start);
              lastMessageLitera++;
              break;
            }
          }
        }

      }
    }

    if (this.directionReverse) {
      return originalText.join('').toUpperCase();
    } else {
      return originalText.reverse().join('').toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;
