const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  if (!arr[0]) return arr;
  

  let result = [...arr];
  const template = [...arr];
  let index0 = template.indexOf('--discard-next');
  let index1 = template.indexOf('--discard-prev');
  let index2 = template.indexOf('--double-next');
  let index3 = template.indexOf('--double-prev');

  let actions = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

 

  for (let i = 0; i < result.length; i++) {
    if (result[i] === actions[0]) {
      if (result[i + 1] === template[index0 + 1]) {
        result.splice(i, 2);
        --i;
      } else result.splice(i, 1);
    } else if (result[i] === actions[1]) {
      if (result[i - 1] === template[index1 - 1]) {
        result.splice(i - 1, 2);
        --i;
      } else result.splice(i, 1);
    } else if (result[i] === actions[2]) {
      if (result[i + 1] === template[index2 + 1]) {
        result[i] = result[i + 1];
      } else result.splice(i, 1);
    } else if (result[i] === actions[3]) {
      if (result[i - 1] === template[index3 - 1]) {
        result[i] = result[i - 1];
      } else result.splice(i, 1);
    } else continue;
  }
  return result;


};

