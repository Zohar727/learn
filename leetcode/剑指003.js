/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    var res;
    for (let i = 0; i<nums.length; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            res = nums[i];
            break;
        }
    }

    return res;
};

var findRepeatNumber2 = function(nums) {
    var now = new Set();
    for (let i = 0; i<nums.length; i++) {
        if (now.has(nums[i])) {
            return nums[i];
        } else {
            now.add(nums[i]);
        }
    }

    // return res;
};

var test = [0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(findRepeatNumber2(test));