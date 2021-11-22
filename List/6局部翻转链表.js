// 局部反转一个链表
// 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明:
// 1 ≤ m ≤ n ≤ 链表长度。
// 示例:
// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL
let aList = [1, 2, 3, 4, 5]
let ListNodea = createList(aList)

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
  let dummy = new ListNode()
  dummy.next = head
  console.log(dummy);
  let v = dummy
  for (let i = 0; i < m - 1; i++) {
    //v是一个游标，用来遍历
    v = v.next
  }
  //记下开始翻转的前一个节点
  let LeftHead = v
  // 开始翻转的节点
  let start = v.next
  let pre = start
  let cur = start.next
  // 开始翻转
  for (let i = m; i < n; i++) {
    let Next = cur.next
    cur.next = pre
    pre = cur
    cur = Next
  }
  // 翻转完后记录的前一节点指向翻转的末端
  LeftHead.next = pre
  // 翻转完后最后的节点指向真正的后序节点
  start.next = cur
  // 1->2<-3<-4->5  2应该指向5，1应该指向4
  return dummy.next
};

console.log(reverseBetween(ListNodea, 2, 4));
