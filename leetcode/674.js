/**
 * leetcode 674
 * https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let resMax = 1;
    let max = 1;

    if (nums.length <=1) {
        return 1;
    }

    for(let i = 1; i<nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            max++;
        } else {
            resMax = Math.max(resMax, max);
            max = 1;
        }
    }

    resMax = Math.max(resMax, max);

    return resMax;
};

console.log(findLengthOfLCIS([1,3,5,7]));