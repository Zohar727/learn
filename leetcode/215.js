/**
 * leetcode 215. 数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => {
        return b-a;
    });


    return nums[k-1];
};

let res = findKthLargest([3,2,3,1,2,4,5,5,6], 4);
console.log(res);

// hotfix 01
console.log(res);
