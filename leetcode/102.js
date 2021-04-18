/**
 * leetcode 102. 二叉树层序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (root == null) return [];

    let queue = [root];
    let res = [];
    res.push([root.val]);

    while (queue.length) {
        let len = queue.length;
        let tempNodeList = [];
        while (len--) {
            let curNode = queue.pop();
            if (curNode.left) {
                queue.unshift(curNode.left);
                tempNodeList.push(curNode.left.val);
            }
            if (curNode.right) {
                queue.unshift(curNode.right);
                tempNodeList.push(curNode.right.val);
            }

        }
        if (tempNodeList.length > 0) {
            res.push(tempNodeList);              
        }
    }

    return res;
};