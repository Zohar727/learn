/**
 * leetcode 101. 对称二叉树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var check = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val == q.val && check(p.left, q.right) && check(p.right, q.left)
}
var isSymmetric = function(root) {
        return check(root, root);
};

// 队列实现
var isSymmetric2 = function(root) {
    if (root == null) return true;
    if (root.left == null && root.right == null) return true;

    var queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length > 0) {
        let left = queue.shift();
        let right = queue.shift();

        if (left == null && right == null) {
            continue;
        }

        if (left == null || right == null) return false;

        if (left.val == right.val) {
            queue.push(left.left);
            queue.push(right.right);
            queue.push(left.right);
            queue.push(right.left);
        } else {
            return false;
        }
    }

    return true;
};