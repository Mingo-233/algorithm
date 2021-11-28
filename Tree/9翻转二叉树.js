/*
题目描述：翻转一棵二叉树。
示例：
输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 const invertTree = function(root) {
  if(!root) return root
  const leftNode = invertTree(root.left)
  const rightNode = invertTree(root.right)
  root.left = rightNode
  root.right = leftNode
  return root
};
console.log(invertTree(root));