 // 链表节点
 function ListNode(val) {
  this.val = val;
  this.next = null;
}

// let aList = [1,2,4]
// let bList = [1,3,4]

 function createList(list){
  let ListNodeHead = new ListNode(list[0])
  let len = list.length
  recursive(ListNodeHead,1)
  function recursive(node,i){
    // console.log(node);
    node.next = i!==len ? new ListNode(list[i]) :null
    i++
    if(i<=len){
      recursive(node.next,i)
    }
  }
  return ListNodeHead
}
//tree
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
// 二叉树节点
function treeNode(val) {
  this.val = val
  this.left = this.right = null
}