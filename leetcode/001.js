/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    let res = [];
    for(let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                res.push(i,j);
                return res;
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9));