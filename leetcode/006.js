/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s;
    // 求二维数组的x y值
    let x,y,evenCol, oddCol,len;
    y = numRows;
    oddCol = y;
    evenCol = y-2;
    len = s.length;
    let temp = Math.floor(len/(evenCol + oddCol));
    let min = len - temp*(oddCol + evenCol);
    x = temp * (1 + evenCol) + (min > oddCol ? (1 + (min - oddCol)) : 1);
    
    let res = new Array();
    let pos = 0;
    for (let i = 0; i< x; i++) {
        res[i] = new Array();
        let remin = i%(1 + evenCol);
        if (remin == 0) {
            let j = 0;
            let tempy = y;
            while (tempy > 0 && pos < len) {
                res[i][j] = s.charAt(pos);
                // console.log(i, j , res[i][j]);
                j++;
                pos++;
                tempy--;
            }
        } else if (pos < len){
            let j = y - remin - 1;
            res[i][j] = s.charAt(pos);
            // console.log(i, j , res[i][j]);
            pos++;
        } else {
            break;
        }

    }

    // return res;
    // 开始遍历二维数组
    let resStr = [];
    for (let j=0; j<y; j++) {
        for (i=0; i<x; i++) {
            if (res[i][j]) {
                resStr.push(res[i][j]);
            }
        }
    }
    // console.log(resStr);
    return resStr.join('');
    
};

var convertNew = function(s, numRows) {
    if (numRows == 1) return s;
    let len = s.length;
    let cycle = 2 * numRows - 2;
    let strArr = [];
    for (var i=0; i< numRows; i++) {
        var j=0;
        while (true) {
            let index = 0;
            if (i == 0 || i == (numRows - 1)) {
                index = j * cycle + i;
            } else {
                // 判断周期
                let times = Math.floor(j/2);
                // 判断字符
                let serial = (j+1)%2;
                if (serial == 1) {
                    index = times * cycle + i; 
                } else {
                    index = (times + 1) * cycle - i;
                }
            }

            // 录入对应下标的字符
            if (index < len) {
                strArr.push(s.charAt(index));
                j++;
            } else {
                break;
            }
        }
    }
    return strArr.join('');
}

console.log(convert('ABCDEFGHIJKLMNOPQRST', 5));
console.log(convertNew('ABCDEFGHIJKLMNOPQRST', 5));