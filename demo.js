// 环形链表基本问题——如何判断链表是否成环？
// 真题描述：给定一个链表，判断链表中是否有环。

// 示例 1：

// 输入：[3,2,0,4]（链表结构如下图） 输出：true
// 解释：链表中存在一个环
let aList = [1, 2, 3, 4, 5]
let ListNodea = createList(aList)

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 入参是头结点 
const hasCycle = function(head) {
  while (head) {
    
    if(head.flag){
      return true
    }else{
      head.flag = true
      head = head.next
    }
  }
  return false
};

// const hasCycle2 = function(head) {
//   let slowCur =head
//   let fastCur =head
//   let i=0,j=0
//   while () {
//     slowCur=slowCur.next
//     i=i+1
//     fastCur=fastCur.next.next
//     j=j+2
//   } 
//   return false
// };
var detectCycle = function(head) {
  if (head === null) {
      return null;
  }
  let slow = head, fast = head;
  while (fast !== null) {
      slow = slow.next;
      if (fast.next !== null) {
          fast = fast.next.next;
      } else {
          return null;
      }
      if (fast === slow) {
          let ptr = head;
          while (ptr !== slow) {
              ptr = ptr.next;
              slow = slow.next;
          }
          return ptr;
      }
  }
  return null;
};

console.log(null==null);