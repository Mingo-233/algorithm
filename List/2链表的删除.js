// 链表结点的删除

// 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

let aList = [1,1,2]

let ListNodea = createList(aList)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const deleteDuplicates = function(head) {
   let cur = head
   while (cur&&cur.next!==null) {
     if(cur.val===cur.next.val){
       cur.next = cur.next.next
     }else{
       cur = cur.next
     }
   }
  return head;
};
console.log(deleteDuplicates(ListNodea));