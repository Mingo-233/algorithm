/*查找数据域为某一特定值的结点
假设这个目标结点的数据域值为 n，我们借助二叉搜索树数据域的有序性，可以有以下查找思路：

递归遍历二叉树，若当前遍历到的结点为空，就意味着没找到目标结点，直接返回。
若当前遍历到的结点对应的数据域值刚好等于n，则查找成功，返回。
若当前遍历到的结点对应的数据域值大于目标值n，则应该在左子树里进一步查找，设置下一步的遍历范围为 root.left 后，继续递归。
若当前遍历到的结点对应的数据域值小于目标值n，则应该在右子树里进一步查找，设置下一步的遍历范围为 root.right 后，继续递归。
*/
//一棵二叉搜索树
const tree = {
  val: 6,
  left: {
    val: 3,
    left: {
      val: 1,
    },
    right: {
      val: 4,
    }
  },
  right: {
    val: 8,
    left: {
      val: 7,
    },
    right: {
      val: 9
    }
  }
};
function search (root, n) {
    // 若 root 为空，查找失败，直接返回
    if(!root) {
      console.warn('未找到目标节点');
      return
    } 
    if(root.val ===n){
      console.dir('目标结点是：');
      console.log(root);

    }else if(root.val>n){
      search(root.left,n)
    }else if(root.val<n){
      search(root.right,n)
    }
}
search(tree,3)

// 二叉搜索树新增节点
function insertIntoBST(root, n) {
  // 若 root 为空，说明当前是一个可以插入的空位
  if(!root) { 
      root = new treeNode(n)
      // 这里是一定要返回这个root，目的：
      // 1设置递归边界，防止堆栈溢出
      // 2将新增的这个节点返回回去，添加到上级节点的left或者right属性上，才算在这个树上真正的新增了节点
      return root
  }
  
  if(root.val > n) {
      // 当前结点数据域大于n，向左查找
      root.left = insertIntoBST(root.left, n)
  } else {
      // 当前结点数据域小于n，向右查找
      root.right = insertIntoBST(root.right, n)
  }

  // 返回插入后二叉搜索树的根结点
  return root
}
console.log(insertIntoBST(tree,11));