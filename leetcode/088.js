/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1 = nums1.concat(nums2);
    nums1.sort();
    return nums1;
};

let nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3;
console.log(merge(nums1,m,nums2,n));