// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
// 输入: 1->1->1->2->3
// 输出: 2->3
let aList = [1, 1, 1, 2, 3]

let ListNodea = createList(aList)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  // 极端情况：0个或1个结点，则不会重复，直接返回
  if (!head || !head.next) return head
  // 假节点（头部节点的前趋节点）
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
    //值重复，记下当前重复的值
      let sameValue = cur.next.val
      while (cur.next && cur.next.val === sameValue) {
        //删除
        cur.next = cur.next.next
      }
    } else {
      cur=cur.next
    }
  }
  return dummy.next
};
console.log(deleteDuplicates(ListNodea));