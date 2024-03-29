/** 
22. 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

有效括号组合需满足：左括号必须以正确的顺序闭合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8

https://leetcode-cn.com/problems/generate-parentheses/

*/
/**
 * @param {number} n
 * @return {string[]}
 */
var ansCache = new Map();
function generate(n) {
    if(ansCache.get(n)) {
        return ansCache.get(n)
    }

    var ans = [];
    if (n==0) {
        ans.push('');
    } else {
        for(let c=0; c<n; c++) {
            var left = generate(c);
            var right = generate(n-1-c);
            left.forEach(lstr => {
                right.forEach(rstr => {
                    ans.push('(' + lstr + ')' + rstr);
                });
            });
        }        
    }


    ansCache.set(n, ans);
    return ans;
}
 var generateParenthesis = function(n) {
    return generate(n);
};

console.log(generateParenthesis(5));