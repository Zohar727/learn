/**
 * leetcode 062 
 * https://leetcode-cn.com/problems/unique-paths/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    var f = new Array(m).fill(0).map(() => new Array(n).fill(0));

    console.log(f);

    for (let i=0; i<m; i++) {
        f[i][0] = 1;
    }

    for (let j=0; j<n; j++) {
        f[0][j] = 1;
    }

    for (let i=1; i<m; i++) {
        for(let j=1; j<n; j++) {
            f[i][j] = f[i-1][j] + f[i][j-1];
        }
    }

    return f[m-1][n-1];
};

console.log(uniquePaths(4,4));