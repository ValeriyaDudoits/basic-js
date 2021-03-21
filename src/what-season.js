const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = ['spring', 'summer', 'autumn', 'winter'];
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error;
  }
  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      return season[3];

    case 2:
    case 3:
    case 4:
      return season[0];

    case 5:
    case 6:
    case 7:
      return season[1];

    case 8:
    case 9:
    case 10:
      return season[2];
  }

};
