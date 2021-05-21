/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  let pos_idx;
  const idx_map = new Map();

  let helper = (index_left, index_right) => {
    if (index_left > index_right) return null;
    const root_val = postorder[pos_idx];
    const root = new TreeNode(root_val);

    const index = idx_map.get(root_val);

    pos_idx--;

    root.right = helper(index+1, index_right);
    root.left = helper(index_left, index -1);

    return root;
  }

  pos_idx = postorder.length - 1;
  inorder.forEach(function (val, index) {
    idx_map.set(val, index);
  });

  return helper(0, inorder.length - 1);
};