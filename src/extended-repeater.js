const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (str === null) str = 'null';

  let repeatTimes = 1;
  if (options.repeatTimes !== undefined) repeatTimes = options.repeatTimes;

  let separator = '+';
  if (options.separator !== undefined) separator = options.separator;

  let addition = options.addition;
  if (options.addition === null) addition = 'null';

  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes !== undefined) additionRepeatTimes = options.additionRepeatTimes;

  let additionSeparator = '|';
  if (options.additionSeparator !== undefined) additionSeparator = options.additionSeparator;

  
  let repeatingStr = [];
  
  for (let i = 0; i < repeatTimes; i++) {

    let strToRepeat = [];
    strToRepeat.push(str);

    for (let j = 0; j < additionRepeatTimes; j++) {
      strToRepeat.push(addition);
  
      if (j < additionRepeatTimes - 1) {
        strToRepeat.push(additionSeparator);
      }
    }
    strToRepeat = strToRepeat.join('');
    repeatingStr.push(strToRepeat);
  }
  return repeatingStr.join(separator);

};
