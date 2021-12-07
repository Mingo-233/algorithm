let a = [5, 1, 3, 7, 2, 0, 6]
// 快速排序入口
function quickSort (arr, left = 0, right = arr.length - 1) {
   // 定义递归边界，若数组只有一个元素，则没有排序必要
  if (arr.length > 1) {
       // lineIndex表示下一次划分左右子数组的索引位
    let lineIndex  = partition(arr, left, right)
     // 如果左边子数组的长度不小于1，左边仍存在数据，则递归快排这个子数组
    if (left < lineIndex  - 1) {
      quickSort(arr, left, lineIndex -1)
    }
    if (right > lineIndex ) {
      quickSort(arr, lineIndex , right)
    }
  }
  return arr
}
// 以基准值为轴心，划分左右子数组的过程
function partition (arr, left, right) {
  let mid = Math.floor(left + (right - left) / 2)
  let baseValue = arr[mid]
  // 初始化左右指针
  let i = left
  let j = right
  while (i <= j) {
    // 左边要找到一个大于等于基准值的数据
    while (arr[i] < baseValue) {
      i++
    }
    // 右边要找到一个小于等于基准值的数据
    while (arr[j] > baseValue) {
      j--
    }
    // 走到这一步 若i仍<=j，则说明上面着基准值左边存在较大元素或右边存在较小元素，最差的情况是基准值就是中位数，交换了也没有关系，后面以当前为基准序进行分割
    if (i <= j) {
      // 交换两个元素确保左右两侧有序
      swap(arr, i, j)
      i++
      j--
    }
  }
  return i
}

// 快速排序中使用 swap 的地方比较多，我们提取成一个独立的函数
function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}


console.log(quickSort(a));