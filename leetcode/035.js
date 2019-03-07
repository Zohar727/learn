/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function sortNumber(a,b)
{
return a - b
}
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target);
    if (index === -1 ) {
        nums.push(target);
        nums = nums.sort(sortNumber);
        return nums.indexOf(target);
    } else {
        return index;
    }
};

console.log(searchInsert([3,5,7,9,10],8));