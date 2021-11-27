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

function BFC(root){
  //初始化队列
  const queue = []
  queue.push(root)
  while (queue.length!=0) {
    const top = queue[0]
    console.log('现在访问的是'+top.val);
    if(top.left){
      queue.push(top.left)
    }
    if(top.right){
      queue.push(top.right)
    }
    // 访问完毕，队头元素出队
    queue.shift()

  }
}
BFC(root)