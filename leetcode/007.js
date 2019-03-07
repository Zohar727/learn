/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = x;
    x = ''+x;
    let arr = x.split('');
    let newArr = arr.reverse();
    let len = newArr.length;
    for (let i = 0;i<len;i++) {
        if (newArr[i] == 0 ){
            continue;
        } else {
            if (temp < 0 ) {
                let res = newArr.slice(i, len-1);
                res = res.join('');
                res = Number(-res)
                if (res < -2147483648) {
                    return 0;
                }
                return res;
            } else {
                let res = newArr.slice(i);
                res = res.join('');
                res = Number(res);
                if (res > 2147483647) {
                    return 0;
                }
                return res;
            }
        }
    }
    return 0;
};

console.log(reverse(1534236469));