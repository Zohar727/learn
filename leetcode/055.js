/**
 * https://leetcode-cn.com/problems/jump-game/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxPosition = 0;

    for (let i=0; i<nums.length; i++) {

        if (i > maxPosition) return false;
        maxPosition = Math.max(maxPosition, i + nums[i]);
    }

    return true;
};

console.log(canJump([3,2,1,0,4]));