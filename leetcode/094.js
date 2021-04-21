/**
 * leetcode 94. 二叉树的中序遍历
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

// 递归解法
function reverseTree (root, res) {
    if (root == null) {
        return res;
    }

    reverseTree(root.left, res);
    res.push(root.val);
    reverseTree(root.right, res)      
}

 var inorderTraversal = function(root) {
    let res = [];
    reverseTree (root, res);
    return res;

};

// 迭代解法
var inorderTraversal2 = function(root) {
    var res = [];
    var stack = [];

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        res.push(root.val);
        root = root.right;

    }

    return res;
}