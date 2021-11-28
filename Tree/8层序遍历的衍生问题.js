/*
题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
示例：

二叉树：[3,9,20,null,null,15,7],
  3
 / \
9  20
  /  \
 15   7
返回其层次遍历结果：

[
[3],
[9,20],
[15,7]
]
*/

const bfc = function(root){
  const queue = []
  const result = []
  if(!root) return result
  queue.push(root)
  //每一次的while其实就是进到了一个新的层级
  while (queue.length) {
    // 记录当前层级的节点
    const level = []
    // 缓存进入循环是队列的长度，因为后序变化会导致队列的长度变化
    let len = queue.length
    // 遍历当前层级所有的节点，将这个层级的所有节点处理完毕
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()
      level.push(cur.val)
      // 将当前节点的孩子推入下一层级
      if(cur.left){
        queue.push(cur.left)
      }
      if(cur.right){
        queue.push(cur.right)
      }
    }
    result.push(level)
  }
  return result
}

console.log(bfc(root));