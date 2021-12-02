/*查找数据域为某一特定值的结点
删除指定结点
想要删除某个结点，首先要找到这个结点。在定位结点后，我们需要考虑以下情况：

1结点不存在，定位到了空结点。直接返回即可。
2需要删除的目标结点没有左孩子也没有右孩子——它是一个叶子结点，删掉它不会对其它结点造成任何影响，直接删除即可。
3需要删除的目标结点存在左子树，那么就去左子树里寻找小于目标结点值的最大结点，用这个结点覆盖掉目标结点
4需要删除的目标结点存在右子树，那么就去右子树里寻找大于目标结点值的最小结点，用这个结点覆盖掉目标结点
5需要删除的目标结点既有左子树、又有右子树，这时就有两种做法了：要么取左子树中值最大的结点，要么取右子树中取值最小的结点。两个结点中任取一个覆盖掉目标结点，都可以维持二叉搜索树的数据有序性
*/
/*一棵二叉搜索树
      6
    3     8
  2  4   7  9
      5
*/
const tree = {
  val: 6,
  left: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4,
      right:{
        val:5
      }
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
function deleteNode (root, targetValue) {
  if (!root) return root
  //找到目标值
  if (root.val === targetValue) {
    //目标是叶子节点
    if (!root.left && !root.right) {
      root = null
    } else if (root.left) {
      // 若目标节点左子树存在，找到他下面值最大的节点，替换到当前要删除的节点位置
      let maxLeft = findMax(root.left)
      root.val = maxLeft.val
      // 下面节点被拿上来替换了，所以下面节点应该被删除。 因为可能存在这个删除节点仍然存在子树，所以递归
      // 因为删除节点，一直递归下去必定有一个node的值会变为null
      root.left = deleteNode(root.left, maxLeft.val)
    } else {
      let minRight = findMin(root.right)
      root.val = minRight.val
      root.right = deleteNode(root.right, minRight.val)
    }

  } else if (root.val > targetValue) {
    // 删除后会返回null ，所以这里一定要接收，把数据的地址连接起来，这步做完才算真的删除了那个节点
    root.left =  deleteNode(root.left, targetValue)
  } else {
    root.right = deleteNode(root.right, targetValue)

  }
  return root
}

// 寻找左子树最大值 (因为查询二叉树的特性，右子树一定大于根，根大于左子树)
function findMax (root) {
  while (root.right) {
    root = root.right
  }
  return root
}

// 寻找右子树的最小值
function findMin (root) {
  while (root.left) {
    root = root.left
  }
  return root
}

let a = deleteNode(tree,5)
console.log(a);
console.log(tree);