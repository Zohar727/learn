/**
 * leetcode 121
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    if (prices.length <= 1) {
        return 0;
    }

    let dp = [];
    let max = 0;

    dp[0] = prices[0];

    for (let i=1; i<prices.length; i++) {
        dp[i] = Math.min(dp[i-1], prices[i]);
        let profit = prices[i] - dp[i-1];
        max = Math.max(max, profit);
    }

    return max;
};

console.log(maxProfit([7,6,4,3,1]));