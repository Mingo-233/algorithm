// 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个结点后，链表变为 1->2->3->5.
let aList = [1, 2, 3, 4, 5]

let ListNodea = createList(aList)

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 const removeNthFromEnd = function(head, n) {
  // 初始化 dummy 结点
  let dummy = new ListNode()
  dummy.next = head
  let curFast = dummy
  let curSlow = dummy
  while (n>0&&curFast.next) {
    curFast = curFast.next
    n--
  }
  while (curFast&&curFast.next) {
    curFast = curFast.next
    curSlow = curSlow.next    
  }
  curSlow.next = curSlow.next.next
  return dummy.next
};

console.log(removeNthFromEnd(ListNodea,2));

// console.log(ListNodea);
