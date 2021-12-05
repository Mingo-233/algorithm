/* 
题目描述：给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是平衡的。
如果有多种构造方法，请你返回任意一种。
      1               2
        2           1   3
          3               4
            4    =》
*/

const tree = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
      right: {
        val: 4
      }
    },
  },

}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function (root) {
  let nums = []
  // 将输入的tree进行中序遍历，将节点记录到数组中 (因为输入的树一定是二叉搜索树，所以输出的数组一定是已经排序过的)
  function inorder (root) {
    if (!root) return
    inorder(root.left)
    nums.push(root.val)
    inorder(root.right)
  }
  // 构造平衡二叉树  与13节二叉搜索树构造一致
  function buildAVL (low, high) {
    if (low > high) return null
    let mid = Math.floor((high - (high - low) / 2))
    let newTreeNode = new treeNode(nums[mid])
    newTreeNode.left = buildAVL(low, mid - 1)
    newTreeNode.right = buildAVL(mid + 1, high)
    return newTreeNode
  }
  inorder(root)
  console.log(nums);

  return buildAVL(0, nums.length-1)
};
console.log(tree);
console.log(balanceBST(tree));