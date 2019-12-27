/**
 * 暴力遍历法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length == 1) return s;
    let res = '';
    for (var i=0; i<s.length; i++) {
        for (var j=i+1; j<=s.length; j++) {
            let str = s.substring(i, j);
            let reStr = str.split('').reverse().join('');
            if (str == reStr) {
                res = str.length > res.length ? str : res;
            }
        }
    }
    return res;
};

/**
 * 中心扩展算法
 * @param {*} s 
 */
var longestPalindromeNew = function(s) {
    if (s.length == 1) return s;
    let res = '';
    for (var i=0; i<s.length; i++) {
        var len1 = getPalind(s, i, i);
        var len2 = getPalind(s, i, i+1);
        var len = Math.max(len1, len2);
        if (len > res.length) {
            if (len%2 == 0) {
                res = s.substring((i -  len/2 + 1), (i + len/2 + 1));
            } else {
                res = s.substring((i -  (len-1)/2), (i + (len-1)/2 + 1));
            }
            
        }
    }
    return res;
};

var getPalind = function (s, left, right) {
    while(left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}

console.log(longestPalindromeNew('cbbd'));