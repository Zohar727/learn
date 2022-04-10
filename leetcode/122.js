/**
 * leetcode 122
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

// 贪心算法
 var maxProfitt = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    let res = 0;
    for(let i=1; i<prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            res += prices[i] - prices[i-1];
        }
    }
    return res;
};

// dp
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }

    const n = prices.length;

    var dp = new Array(n).fill(0).map(v => new Array(2).fill(0));

    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (let i=1; i<prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }

    return Math.max(dp[n-1][0], dp[n-1][1]);
}

console.log(maxProfit([7,1,5,3,6,4]));