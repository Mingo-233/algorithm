let aList = [1,2,4]
let bList = [1,3,4]


let ListNodea = createList(aList)
let ListNodeb = createList(bList)
console.log(ListNodea);
console.log(ListNodeb );

let  mergeList = function(list1,list2){
  let list3 = [...list1,...list2]
  console.log(list3);

  list3.sort((a,b)=>a-b)
  return list3
}

console.log(mergeList(ListNodea,ListNodeb));