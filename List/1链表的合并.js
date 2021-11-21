let aList = [1,2,4]
let bList = [1,3,4]


let ListNodea = createList(aList)
let ListNodeb = createList(bList)
console.log(ListNodea);
console.log(ListNodeb );

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let head  = new ListNode()
  // cur 就是相当于一个指针，是一个临时变量，对他本身操作是不会影响到原先链表的，改的是值。但是对他的属性操作，是会同步原先链表的，因为改的是地址
  let cur = head 
  while(l1&&l2){
    if(l1.val<=l2.val){
      cur.next = l1
      l1 = l1.next
      console.log(l1);
    }else{
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
   // 处理链表不等长的情况
  cur.next = l1 !==null ? l1:l2
  return head.next
};

console.log(mergeTwoLists(ListNodea,ListNodeb));