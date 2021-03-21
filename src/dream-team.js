const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let result = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      if (members[i].charAt(0) === ' ') {
        for (let j = 1; j < members[i].length; j++) {
          if (members[i].charAt(j) === ' ') {
            continue;
          } else {
            result[i] = members[i].charAt(j);
            break;
          }
        }

      } else result[i] = members[i].charAt(0);
    } else continue;
  }
  for (let m = 0; m < result.length; m++) {
    if (result[m] != undefined) {
      result[m] = result[m].toUpperCase();
    }
  }
  result.sort();
  let str = result.join('');
  return str.toUpperCase();
};
