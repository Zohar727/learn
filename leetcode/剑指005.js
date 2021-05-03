/**
 * 剑指 Offer 05. 替换空格
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/ /g, "%20");
};

console.log(replaceSpace('we are     hap '))

