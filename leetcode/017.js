/**
 * 17. Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    digits = digits.split('');
    let dict = {};
    dict['2'] = ['a', 'b', 'c'];
    dict['3'] = ['d', 'e', 'f'];
    dict['4'] = ['g', 'h', 'i'];
    dict['5'] = ['j', 'k', 'l'];
    dict['6'] = ['m', 'n', 'o'];
    dict['7'] = ['p', 'q', 'r', 's'];
    dict['8'] = ['t', 'u', 'v'];
    dict['9'] = ['w', 'x', 'y', 'z'];

    let disgitArr = [];
    let i;
    for (i in digits) {
            disgitArr.push(dict[digits[i]]);
    }

    return combinations(disgitArr);

    function combinations (digitArr) {
        let newArr = digitArr.slice(0);
        if (newArr.length == 0) {
            return [];
        } else {
            let res = [];
            let top = newArr.shift();
            let last = combinations(newArr);
            if (last.length === 0) {
                return top;
            } else {
                for (let i=0; i<top.length; i++) {
                    for (let j=0; j<last.length; j++) {
                        res.push(top[i] + last[j]);
                    }
                }
                return res;
            }
        }
    }
};

console.log(letterCombinations('23'));