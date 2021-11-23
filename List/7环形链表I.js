// 环形链表基本问题——如何判断链表是否成环？
// 真题描述：给定一个链表，判断链表中是否有环。

// 示例 1：

// 输入：[3,2,0,4]（链表结构如下图） 输出：true
// 解释：链表中存在一个环

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 入参是头结点 
const hasCycle = function(head) {
  while (head) {
    // 如果 flag 已经立过了，那么说明环存在
    if(head.flag){
      return true
    }else{
      head.flag = true
      head = head.next
    }
  }
  return false
};
