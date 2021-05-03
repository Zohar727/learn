// 剑指 Offer 04. 二维数组中的查找
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let current = matrix[i];
        if (current.length == 0 || current[0] > target || current[current.length - 1] < target) {
            continue;
        }
        if (current.includes(target)) {
            return true;
        }
    }

    return false;
};