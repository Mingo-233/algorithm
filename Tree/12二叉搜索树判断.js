/**
题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：
节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
 */
const tree2 = {
  val: 2,
  left: {
    val: 1
  },
  right: {
    val: 3
  }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 const isValidBST = function (root) {
  function recursive (root, min, max) {
    //若空树，则合法
    if (!root) return true
    // 若右子树的值小于等于根节点 或 若左子树的值大于等于根节点，则不合法
    if(root.val<min|| root.val>max) return false
    return recursive(root.left,min,root.val)&&recursive(root.right,root.val,max) 
  }
  // 初始化最大值和最小值
  return recursive(root, -Infinity, Infinity)
};


console.log(isValidBST(tree2));