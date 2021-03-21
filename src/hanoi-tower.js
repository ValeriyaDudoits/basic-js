const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let trns = Math.pow(2, disksNumber) - 1;
  let scnds = Math.floor(trns / (turnsSpeed / 3600));
  let result = {
    turns : trns,
    seconds : scnds
  };

  return result;

};
