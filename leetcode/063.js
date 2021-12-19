/**
 * 63. Unique Paths II
 * https://leetcode-cn.com/problems/unique-paths-ii/
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length; // 行 y
    var n = obstacleGrid[0].length; // 列 x

    var dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i=0; i<n; i++) {
        if (obstacleGrid[0][i] === 0) {
            dp[0][i] = 1;
        } else {
            break;
        }
    }

    for (let j=0; j<m; j++) {
        if (obstacleGrid[j][0] === 0) {
            dp[j][0] = 1;
        } else {
            break;
        }
    }

    return dpres(m, n);

    function dpres(m, n) {
        for (let i=1; i<m; i++) {
            for (let j=1; j < n; j++) {
                if (obstacleGrid[i][j] === 0) {
                    dp[i][j] = dp[i-1][j] + dp[i][j-1];
                }
            }
        }

        return dp[m-1][n-1];
    }
};

// const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
// const obstacleGrid = [[0,1],[0,0]]; 
const obstacleGrid = [[1,0]]; 
console.log(uniquePathsWithObstacles(obstacleGrid));