/**
 * 145. 二叉树的后序遍历
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
 var postorderTraversal = function(root) {
    var res = [];
    postorder(root, res);
    return res;
};

function postorder (root, res) {
    if (root == null) {
        return;
    }

    postorder(root.left, res);
    postorder(root.right, res);
    res.push(root.val);
}

// 迭代写法
function preOrderTree2 (root, res) {
    var stack = [root];
    var res = [];

    while (stack.length > 0) {
        var p = stack.pop();
        while (p != null) {
            stack.push(p);
            p = p.left;
        }
        var e = stack.pop();
        if (e) {
            while (!e.right) {
                res.push(e.val);
                e = stack.pop();            
            }
            e = e.right;
            stack.push(e);            
        }
    }

    return res;
}