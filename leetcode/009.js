/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let pal = (''+x).split('');
    pal = pal.reverse();
    pal = pal.join('');
    let strX = ''+x;
    if (pal === strX) {
        return true;
    }
    return false;
};

console.log(isPalindrome(-121));