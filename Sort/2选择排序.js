// 选择排序的关键字是“最小值”：循环遍历数组，每次都找出当前范围内的最小值，把它放在当前范围的头部；然后缩小排序范围，继续重复以上操作，直至数组完全有序为止。

const a = [5, 3, 2, 4, 1]

function selectSort (arr) {
  let len = arr.length
  // 最小值的索引
  let minIndex
  // 遍历到最后一个时只有一个元素了，所以不需要遍历了，len-1
  for (let i = 0; i < len-1; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      // 找出最小值的索引
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 如果最小值的索引不是当前循环的开始第一个 则进行交换，每次交换之后，数组的前面都是已经排序好的了
    if (minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr 
}

console.log(selectSort(a));