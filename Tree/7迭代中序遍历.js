const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

/** 中序遍历 左->根->右
 * @param {TreeNode} root
 * @return {number[]}
 */
 const inorderTraversal = function(root) {
   let result = []
   let stack = []
   //游标
   let cur = root
   while (cur ||stack.length!==0 ) {
     //将所有左节点全部遍历出来，同时也分别记住了他们的上个节点，存在栈当中
     while (cur) {
       stack.push(cur)
         //游标指向当前节点的左节点
       cur = cur.left
     }
     //出栈
     cur = stack.pop()
     result.push(cur.val)
     //游标指向当前节点的右节点，若右节点不存在，那么下个while就不会进入，游标将移动到当前节点的上节点（也就是跟节点）。 左->根
     //若右节点存在，进入到右节点后继续寻找它的左节点。  根->右
     cur = cur.right
   }
   return result
};
console.log(inorderTraversal(root));