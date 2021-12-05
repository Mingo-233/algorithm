/* 
题目描述：给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为： 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
      1
    2   3
  3   3   
4  4   
*/

const tree ={
  val:1,
  left:{
    val:2,
    left:{
      val:3,
      left:{
        val:4
      },
      right:{
        val:4
      }
    },
    right:{
      val:3,
    }
  },
  right:{
    val:2
  }
}
const isBalanced = function(root) {
  let isBalancedFlag = true
  dfc(root)

  function dfc(root){
    // 如果递归在叶子节点或者标志位已经是false了，则返回
    if(!root ||!isBalancedFlag) return 0
    // 得到左子树和右子树的高度
    let leftHigh = dfc(root.left)
    let rightHigh = dfc(root.right)
    // 若他们的高度绝对值差大于一，则不符合平很二叉树的特性
    if(Math.abs(leftHigh-rightHigh)>1){
      isBalancedFlag =false
      return 0
    }
    // 每一层级高度都加一，最末级的高度为1
    return Math.max(leftHigh,rightHigh)+1
  }
  return isBalancedFlag
};
console.log(tree);
console.log(isBalanced(tree));