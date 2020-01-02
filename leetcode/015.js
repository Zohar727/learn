/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res = [];
    nums.sort((a, b) => {
        return a - b;
    });
    // 去重
    // nums = Array.from(new Set(nums));
    if (nums[nums.length-1] < 0 || nums[0] > 0 || nums.length == 0) return [];
    for (let i=0; i<nums.length; i++) {
        let l = i+1;
        let r = nums.length - 1;
        let cur = nums[i];
        if (cur > 0) {
            break;
        }
        if (nums[i-1] !== undefined && nums[i] == nums[i-1]) continue;
        // let target = 0 - cur;
        while (r > l) {
            let temp = cur + nums[l] + nums[r];
            if (temp == 0) {
                res.push([cur, nums[l], nums[r]]);
                while (r > l && nums[l] == nums[l+1]) l++;
                while (r > l && nums[r] == nums[r-1]) r--;
                l++;
                r--;
            } 
            else if (temp < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return res;
};

let arr = [-1, 0, 1, 2, -1, -4];
// [-4, -1, -1, 0, 1, 2]
console.log(threeSum(arr));