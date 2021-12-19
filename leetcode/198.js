/**
 * 198. 打家劫舍
 * https://leetcode-cn.com/problems/house-robber/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    var n = nums.length;
    var dp = [];
    if (n == 1) {
        return nums[0];
    }
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i=2; i<n; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]); 
    }
    return dp[n-1];
};

// const house = [1,2,3,1];
const house = [2,7,9,3,1];
console.log(rob(house));