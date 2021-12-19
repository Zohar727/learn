/**
 * 64. Minimum Path Sum
 * https://leetcode-cn.com/problems/minimum-path-sum/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    var m = grid.length; // y
    var n = grid[0].length; // x

    var dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    dp[0][0] = grid[0][0];

    for(let i=1; i<n; i++) {
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }

    for(let j=1; j<m; j++) {
        dp[j][0] = dp[j-1][0] + grid[j][0];
    }

    for (let i=1; i<m; i++) {
        for (let j=1; j<n; j++) {
            let beforeSum = dp[i-1][j] < dp[i][j-1] ? dp[i-1][j] : dp[i][j-1];
            dp[i][j] = beforeSum + grid[i][j];
        }
    }

    return dp[m-1][n-1];
};

// const grid = [[1,3,1],[1,5,1],[4,2,1]];
const grid = [[1,2,3],[4,5,6]];
console.log(minPathSum(grid));