/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    s = s.split('');
    for (let i=0; i<s.length;i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            arr.push(s[i]);
        } else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            temp = arr.pop();
            item = s[i];
            if ((temp === '(' && item === ')') || (temp === '[' && item === ']') || (temp === '{' && item === '}')) {
                continue;
            } else {
                return false;
            }
        }
    }
    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }
    
};

console.log(isValid('('));