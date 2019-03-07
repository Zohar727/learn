/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    if (len === 0) {
        return '';
    }
    if (len === 1) {
        return strs[0];
    }
    
    // if (len === 2) {
    //     let sameLen = strs[0].length;
    //     if (strs[0] === strs[1]) {
    //         return strs[0];
    //     }
    // }
    if (strs[0] === "") {
        return '';
    }
    let firstLen = strs[0].length;
    if (firstLen === 1) {
        for (let i = 1; i < len; i++) {
            if (strs[i].substr(0,1) === strs[0]) {
                continue;
            } else {
                return '';
            }
        }
        return strs[0];
    }
    for (let j = 0; j < strs[0].length; j++) {
        let sameStr = strs[0].substring(0, j+1);
        for (let i = 1; i < len; i++) {
            if (strs[i].indexOf(sameStr) !== 0) {
                let res = sameStr.substring(0, sameStr.length-1);
                return res;
            }
        }
    }
    return strs[0];
};

// longestCommonPrefix(["", ""]);
console.log(longestCommonPrefix(["aac", "aaa"]));

