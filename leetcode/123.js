/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 * leetcode 123
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let max1 = 0;
    let max2 = 0;
    let dp = [];

    if (prices.length < 1) {
        return 0;
    }

    dp[0] = prices[0];

    for (let i = 1; i<prices.length; i++) {
        dp[i] = Math.min(dp[i-1], prices[i]);
        let profit = prices[i] -  dp[i-1];
        if (profit > max1) {
            max1 = profit;
        } else if (profit > max2) {
            max2 = profit;
        }
    }

    console.log(max1, max2);
    return max1 + max2;
};

console.log(maxProfit([3,3,5,0,0,3,1,4]));