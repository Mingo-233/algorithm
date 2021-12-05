/*题目描述：将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
*/

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 const sortedArrayToBST = function(nums) {
  if(!nums.length) return null
  function buildBST(low,high){
    //当low>high时，表示传入的数组所有数字都遍历完了
    if(low>high) return null
   //  取到当前范围最中间的元素
    let mid = Math.floor((high-(high-low)/2))
   //  根据搜索二叉树的特性，最中间的就是根，相当于把这个根给挑出来了
    let newTreeNode = new treeNode(nums[mid])
   //  以同样的思路挑起这个中间元素前面和后面的跟
    newTreeNode.left = buildBST(low,mid-1)
    newTreeNode.right = buildBST(mid+1,high)
    return newTreeNode
  }
  return buildBST(0,nums.length-1)

};

console.log(sortedArrayToBST([1,2,3]));