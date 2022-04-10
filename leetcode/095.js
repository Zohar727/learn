/**
 * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
 * leetcode 95
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }

    let memo = new Map();

    function generateTreesRange(start, end) {
        var allTree = [];
        if (start > end) {
            allTree.push(null);
            return allTree;
        }
        let memoKey = `${start}&${end}`;
        if (memo.has(memoKey)) return memo.get(memoKey);

        for (var i = start; i<=end; i++) {
            var leftTree = generateTreesRange(start, i-1);
            var rightTree = generateTreesRange(i+1, end);
    
            for (const left of leftTree) {
                for (const right of rightTree) {
                    allTree.push(new TreeNode(i, left, right));
                }
            }
            
        }
        
        memo.set(memoKey, allTree);
        return allTree;
    }

    return generateTreesRange(1, n);
};



var generateTreesbak = function (n) {
    if (n == 0) return [];
    // 备忘录，避免重复计算
    let memo = new Map();
    /* 构造闭区间 [lo, hi] 组成的 BST */
    const build = (lo, hi) => {
      let res = [];
      // base case，显然当lo > hi闭区间[lo, hi]肯定是个空区间，也就对应着空节点 null，
      if (lo > hi) {
        res.push(null);
        return res;
      }
      let memoKey = `${lo}&${hi}`;
      // 如果缓存当中有就直接拿
      if (memo.has(memoKey)) return memo.get(memoKey);
      // 1、穷举 root 节点的所有可能。
      for (let i = lo; i <= hi; i++) {
        // 2、递归构造出左右子树的所有合法 BST。
        let leftTree = build(lo, i - 1);
        let rightTree = build(i + 1, hi);
        // 3、给 root 节点穷举所有左右子树的组合。
        for (let left of leftTree) {
          for (let right of rightTree) {
            res.push(new TreeNode(i, left, right));
          }
        }
      }
      // 将结果集放入到缓存中
      memo.set(memoKey, res);
      return res;
    };
    // 构造闭区间 [1, n] 组成的 BST
    return build(1, n);
  };
  
  console.log('test', generateTrees(3));