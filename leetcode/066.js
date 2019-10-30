/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let state = false;
    for (let i = digits.length-1; i >= 0; i--) {
      if(digits[i] + 1 == 10) {
        digits[i] = 0;
        state = true;
        continue;
      } else {
        digits[i] = digits[i] + 1;
        state = false;
        break;
      }
    }
    if (state) {
      digits.unshift(1);
    }
    return digits;
};

