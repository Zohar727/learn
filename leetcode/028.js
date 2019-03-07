/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let len = needle.length;
    if (len === 0) return 0;
    let index = haystack.indexOf(needle.substr(0,1));
    if ( index === -1) return -1;
    if (len === 1) return 1;
    for (let i =1; i<needle.length; i++) {
        if (needle.substr(i,1) === haystack.substr(index+i, 1)) {
            continue;
        } else {
            let res = needle.substring(0, i);
            return res.length;
        }
    }
    return needle.length;
};

console.log(strStr("a", "a"));