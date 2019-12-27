/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLength = 1;
    var tempArr = [];
    var tempLen = 0;
    var strArr = s.split('');
    if (strArr.length == 0) return 0;
    for (let i=0; i<strArr.length; i++) {
        for (let j = i; j<strArr.length; j++) {
            if (tempArr.indexOf(strArr[j]) == -1) {
                tempLen++;
                tempArr.push(strArr[j])
            } else {
                if (tempLen > maxLength) {
                    maxLength = tempLen;
                }
                tempLen = 0;
                tempArr = [];
                break;
            }            
        }
        if (tempLen > maxLength) {
            maxLength = tempLen;
        }
    }

    return maxLength;
};

var lengthOfLongestSubstringNew = function (s) {
    var strArr = s.split('');
    var maxLength = 0;
    var strIndexArr = [];
    for (var i=0,j=0; i<strArr.length; i++) {
        let ch = strArr[i];
        if (strIndexArr[ch]) {
            strIndexArr[ch]++;
        } else {
            strIndexArr[ch] = 1;
        }
        while (strIndexArr[ch] > 1) {
            --strIndexArr[strArr[j++]];
        }
        maxLength = Math.max(maxLength, i-j+1);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstringNew('aab'));
console.log(lengthOfLongestSubstringNew('abcabcabc'));