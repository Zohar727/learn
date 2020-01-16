/**
 * 4Sum
 * Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? 
 * Find all unique quadruplets in the array which gives the sum of target.
 * Example:
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => {
      return a - b;
    });
    let n = nums.length;
    var res = [];

    for (let i = 0; i<n-3;i++) {
      if (i>0 && nums[i-1] === nums[i])
        continue;
      for (let j = i+1; j<n-2; j++) {
        if (j > i+1 && nums[j-1] === nums[j])
          continue;
        let l = j+1;
        let r = n-1;
        let cur = nums[j];
        while (r > l) {
          let temp = cur + nums[i] + nums[l] + nums[r];
          if (temp == target) {
            res.push([nums[i], cur, nums[l], nums[r]]);
            while (r > l && nums[l] == nums[l+1]) l++;
            while (r > l && nums[r] == nums[r-1]) r--;
            l++;
            r--;
          } else if (temp < target) {
            l++;
          } else {
            r--;
          }

        }
      }
    }
    return res;
};

let nums = [-3,-2,-1,0,0,1,2,3], target = 0;

// -5,-2,1,1,3,5,5,5  4
// [-3,-2,-1,0,0,1,2,3] 0
console.log(fourSum(nums, target));