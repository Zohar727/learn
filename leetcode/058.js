/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let index = s.lastIndexOf(' ');
    if (index == -1) {
      return s.length;
    } else {
      let i = index-1
      let res = 0;
      while (i >= 0 && s[i] !== ' ') {
        i--;
        res++;
      }
      return res;
    }
};

var lengthOfLastWord2 = function(s) {
  return s.trim().split(' ').reverse().shift().length;
}

var test = "a ";
lengthOfLastWord2(test);