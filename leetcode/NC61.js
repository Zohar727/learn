/**
  * 
  * @param numbers int整型一维数组 
  * @param target int整型 
  * @return int整型一维数组
  */
 function twoSum( numbers ,  target ) {
    // write code here
    let cpNum = numbers.concat();
    // cpNum = cpNum.sort((a,b) => {
    //     return a - b;
    // });

    // console.log(cpNum);

    if (numbers.length == 2) {
        return [1, 2];
    }

    for (let i=0; i<cpNum.length-1; i++) {
        for (let j = i+1; j<cpNum.length; j++) {
            let sum = cpNum[i] + cpNum[j];
            if (sum == target) {
                // let x = numbers.indexOf(cpNum[i]) + 1;
                // numbers.splice(x-1, 1, null);
                // let y = numbers.indexOf(cpNum[j]) + 1;
                return [i+1, j+1];
            }
        }
    }
}
module.exports = {
    twoSum : twoSum
};

console.log(twoSum([2,1,9,4,4,56,90,3],8));

function toSum2 (numbers ,  target) {
    var numMap = new Map();
    for (let i=0; i<numbers.length; i++) {
        if (numMap.has(target - numbers[i])) {
            let mapIndex = numMap.get(target - numbers[i]);
            let curIndex = i + 1;
            return curIndex > mapIndex ? [mapIndex, curIndex] : [curIndex, mapIndex];
        }
        numMap.set(numbers[i], i+1);
    }
}