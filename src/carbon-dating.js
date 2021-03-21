const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  //let sampleActivityNum = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || Number(sampleActivity) > 15 || Number(sampleActivity) < 1 || isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
  
};
