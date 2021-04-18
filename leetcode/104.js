/**
 * leetcode 104.二叉树深度遍历 求最大深度
 * @param {*} root 
 * @returns 
 */

var maxDepth = function(root) {
    if (root == null) {
        return 0;
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth2 = function (root) {
    if (root == null) return 0;

    var queue = [root];
    var res = 0;
    while(queue.length) {
        let len = queue.length;
        while (len--) {
            let curNode = queue.pop();
            curNode.left && queue.unshift(curNode.left);
            curNode.right && queue.unshift(curNode.right);
        }
        res++;
    }

    return res;
}