/**
 * 213. 打家劫舍 II
 * https://leetcode-cn.com/problems/house-robber-ii/
 */

 var rob = function(nums) {
    var n = nums.length;
    if (n===1) {
        return nums[0];
    } else if (n===2) {
        return Math.max(nums[0], nums[1]);
    }
    return Math.max(robRange(nums, 0, n-2), robRange(nums, 1, n-1));
};

function robRange(nums, start, end) {
    var dp = [];
    dp[start] = nums[start];
    dp[start+1] = Math.max(nums[start], nums[start+1]);

    for (let i=start + 2; i<=end; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]); 
    }
    return dp[dp.length-1];
}
// const robs = [2,3,2];
// const robs = [1,2,3,1];
const robs = [200,3,140,20,10];
console.log(rob(robs));