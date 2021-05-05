/**
 * leetcode 96. 不同的二叉搜索树
 * @param {number} n
 * @return {number}
 */

// 解题思路：
// 假设存在n个节点的二叉搜索数个数是 G(n); 令 f(i) 为根节点为i的二叉搜索数个数；
// 那么：
// G(n) = f(1) + f(2) + ... + f(n)
// f(i) = G(i-1) * G(n-i)

// 由上面两个公式可以推导出以下公式：
// G(n) = G(0) * G(n-1) + G(1) * G(n-2) + ... + G(n-1) * G(0)
// G(0) = 1
// G(1) = 1
// 

var numTrees = function(n) {
    const glist = new Array(n+1).fill(0);

    glist[0] = 1;
    glist[1] = 1;

    for (let i= 2; i<=n; i++) {
        for (let j=1; j<=i; ++j) {
            glist[i] += glist[j -1] * glist[i - j] // f(i) = G(i - 1) * G(n-i)
        }
    }

    return glist[n];
};