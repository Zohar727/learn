/**
 * leetcode 144. 二叉树的前序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preOrderTree (root, res) {
    if (root == null) {
        return;
    }
    res.push(root.val);
    preOrderTree(root.left, res);
    preOrderTree(root.right, res);
}
 var preorderTraversal = function(root) {
    let res = [];
    // test 2
    preOrderTree(root, res);
    return res;
};

// 迭代写法
function preOrderTree2 (root, res) {}