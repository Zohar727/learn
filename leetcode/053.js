var maxSubArray = function(nums) {
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i=0; i<nums.length; i++) {
      sum = nums[i] + (sum > 0 ? sum : 0);
      max = sum > max ? sum : max;
    }
    return max;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);