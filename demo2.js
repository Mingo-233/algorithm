let a = [8, 7, 6, 5, 4, 3, 2, 1]
function mergeSort (arr) {
  let len = arr.length
  if (len <= 1) {
    return arr
  }
  // 分割点
  let mid = Math.floor(len / 2)
  // 将左右数组分割 返回的已经是有序数组了
  let leftPart = mergeSort(arr.slice(0, mid))
  let RightPart = mergeSort(arr.slice(mid, len))
  // 将2个有序数组合并成一个有序数组
  let result = mergeArr(leftPart, RightPart)
  return result
}

function mergeArr (arr1, arr2) {
  let result = []
  let len1 = arr1.length
  let len2 = arr2.length
  // 初始化两个指针
  let i =0 ,j = 0;
  while (i < len1 && j < len2) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j])
      j++
    } else {
      result.push(arr1[i])
      i++
    }
  }
    // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
  if(i<len1){
    return result.concat(arr1.slice(i))
  }else{
    return result.concat(arr2.slice(j))
  }
}
console.log(mergeSort(a));