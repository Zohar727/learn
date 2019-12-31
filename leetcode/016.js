/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosestOld = function(nums, target) {
    let positive = [];
    let negative = [];
    nums.map(function (item, index) {
        let temp = target - item;
        if (temp >= 0) {
            positive.push(temp);
        } else {
            negative.push(temp);
        }
    });
    positive.sort((a, b) => {
        return a - b;
    });
    negative.sort((a, b) => {
        return b - a;
    });
    // console.log(positive);
    let positiveBak = positive.slice();
    let negativeBak = negative.slice();
    let result = [];
    if (positive.length > 0 && negative.length > 0) {
        for (var i=0,j=0; i<positive.length && j<negative.length && result.length < 3; ) {
            if (positive[i] < Math.abs(negative[j])) {
                result.push(positive[i]);
                positiveBak.splice(i, 1)
                i++;
            } else {
                result.push(negative[j]);
                negativeBak.splice(j, 1);
                j++
            }
        }

    } else if (positive.length == 0) {
        result.push(negative[0], negative[1], negative[2]);
    } else if (negative.length == 0) {
        result.push(positive[0], positive[1], positive[2]);
    }

    if (result.length < 3) {
        let temp = 3 - result.length;
        let tempArr = positiveBak.length == 0 ? negativeBak.slice() : positiveBak.slice();
        let i = 0;
        while (temp > 0) {
            result.push(tempArr[i]);
            i++;
            temp--;
        }
    }

    // console.log(result);


    let sum = 0;
    result.map((item) => {
        sum += (target - item);
    });

    return sum;
    
};

var threeSumClosest = function(nums, target) {
    var res = 0;
    var diff = Infinity;
    nums.sort((a, b) => {
        return a - b;
    });
    for (let i=0; i<nums.length; i++) {
        if(nums[i - 1] !== undefined && nums[i - 1] === nums[i]){
            continue;
        }
        let l = i + 1;
        let r = nums.length - 1;
        let cur = nums[i];
        while (r > l) {
            let temp = Math.abs(target - cur - nums[l] - nums[r]);
            if (temp < diff) {
                diff = temp;
                res = cur + nums[l] + nums[r];
            }

            if (nums[l] + nums[r] + cur < target) {
                l++;
            } else {
                r--;
            }
        }
    }
    return res;
}

// let nums = [-1, 2, 1, -4], target = 1;
// let nums = [1, 1, 1, 0], target = 100;
let nums = [0, 2, 1, -3], target = 1;

console.log(threeSumClosest(nums, target));