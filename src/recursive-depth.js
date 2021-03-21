const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr ) {

    /*if (!Array.isArray(arr)) return 0;

    let count = 1;
    let lengthOfArr = 1;
    let lengthOfNewArr = arr.length;

    if (lengthOfNewArr > lengthOfArr) {
      lengthOfArr = arr.length;
      arr = arr.flat();
      lengthOfNewArr = arr.length;
      count += 1;
    } else return count;*/

    let count = 1;
  	arr.forEach(i => {
      if (Array.isArray(i)) {
	       count = Math.max(this.calculateDepth(i) + 1, count);
	    }
	})
		return count;
	}

};