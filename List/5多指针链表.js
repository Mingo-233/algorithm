// 完全反转一个链表
// 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
let aList = [1, 2, 3, 4, 5]

let ListNodea = createList(aList)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur !== null) {
    //记录后驱节点
    let next = cur.next
    // 反转指针
    cur.next = pre
    //前驱节点前进一步
    pre = cur
    //当前节点前进一步
    cur = next
  }
  return pre
};

console.log(reverseList(ListNodea));