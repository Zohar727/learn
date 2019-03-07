/**
 * @param {number[]} nums
 * @return {number}
 */

// var removeDuplicates = function(nums) {
//     nums.map((item, index) => {
//         let ops = nums.lastIndexOf(item);
//         if (index !== ops) {
//             nums.splice(ops, 1);
//         }
//     });
//     return nums;
// };

var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0
    let pointer = 0
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] != nums[pointer]) {
        pointer++
        nums[pointer] = nums[i]
        
      }
    }
  
    return pointer + 1
  };

console.log(removeDuplicates([1,1,2]));