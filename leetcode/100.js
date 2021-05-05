/**
 * leetcode 100. 相同的树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var check = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    return p.val == q.val && check (p.left, q.left) && check(p.right, q.right);
}
 var isSameTree = function(p, q) {
    return check(p, q);
};