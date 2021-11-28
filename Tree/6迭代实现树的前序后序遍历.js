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
/** 前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */ 
 const preorderTraversal = function(root) {
  // 定义结果数组
  const res = []  
  // 处理边界条件
  if(!root) {
      return res
  }
  // 初始化栈结构
  const stack = [] 
  // 首先将根结点入栈
  stack.push(root)  
  // 若栈不为空，则重复出栈、入栈操作
  while(stack.length) {
      // 将栈顶结点记为当前结点
      const cur = stack.pop() 
      // 当前结点就是当前子树的根结点，把这个结点放在结果数组的尾部
      res.push(cur.val)
      // 若当前子树根结点有右孩子，则将右孩子入栈
      if(cur.right) {
          stack.push(cur.right)
      }
      // 若当前子树根结点有左孩子，则将左孩子入栈
      if(cur.left) {
          stack.push(cur.left)
      }
  }
  // 返回结果数组
  return res
};
/**后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
 const postorderTraversal = function(root) {
  // 定义结果数组
  const res = []  
  // 处理边界条件
  if(!root) {
      return res
  }
  // 初始化栈结构
  const stack = [] 
  // 首先将根结点入栈
  stack.push(root)  
  // 若栈不为空，则重复出栈、入栈操作
  while(stack.length) {
      // 将栈顶结点记为当前结点
      const cur = stack.pop() 
      // 当前结点就是当前子树的根结点，把这个结点放在结果数组的头部
      res.unshift(cur.val)
      // 若当前子树根结点有左孩子，则将左孩子入栈
      if(cur.left) {
        stack.push(cur.left)
      }  
      // 若当前子树根结点有右孩子，则将右孩子入栈
      if(cur.right) {
        stack.push(cur.right)
      }
  }
  // 返回结果数组
  return res
};

console.log(preorderTraversal(root));
console.log(postorderTraversal(root));
//  ['A', 'B', 'D', 'E', 'C', 'F']
//  ['D', 'E', 'B', 'F', 'C', 'A']