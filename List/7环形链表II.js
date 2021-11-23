// 环形链表基本问题——如何判断链表是否成环？
// 真题描述：给定一个链表，判断链表中是否有环。 快慢指针法（不可更改链表属性条件下）
// 示例 1：

// 输入：[1,2,3,4->2]（链表结构如下图） 输出：不存在链表返回null，若存在返回环口
// 解释：链表中存在一个环


let a = new ListNode('1')
let b = new ListNode('2')
let c = new ListNode('3')
let d = new ListNode('4')

a.next = b
b.next = c
c.next = d
d.next = b
console.log(a);
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

//       7<-6<-5
//       |     ^
//       |     |
// 0->1->2->3->4
// [-----]
//    a
// 如上图所示
// 我们设置快慢两个指针，fast, slow fast一次前进两步，slow一次前进一步，
// 设a为第一个节点到入环节点的距离。 a=[0->2]
// 设b为入环口到相遇点的距离。b=[2->6]
// 设c为相遇点到入环口的距离。c=[6->2]
// 当fast，和slow相遇的时候，fast经过的节点是slow的两倍，设slow经过的节点数为S
// 根据上面的设置 可知 S=a+b ,2S=a+b+c+b，可知 a=c,此时让slow回到第一个节点，
// fast处于第一次相遇的节点，此时slow从第一个节点出发，因为a=c，所以fast，和slow会在入环口第二次相遇，得到要求的节点
console.log(detectCycle(a));