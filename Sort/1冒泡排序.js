
const a = [5, 3, 2, 4, 1]

// 冒泡 原始版本
function bubbleSort (arr) {
  let executeNums = 0
  // 外层循环用于控制从头到尾的比较+交换到底有多少轮
  for (let i = 0; i < arr.length; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    for (let j = 0; j < arr.length - 1; j++) {
      executeNums++
      if (arr[j] > arr[j + 1]) {
        //交换
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.log('执行了:' + executeNums + '次'); //20
  return arr
}

console.log(bubbleSort(a));
// 冒泡 改进版
function bubbleSortB (arr) {
  let executeNums = 0
  for (let i = 0; i < arr.length; i++) {
    // 外循环每次执行完之后，其实就有一个值已经排序完毕，例如最大的值在第一次排序之后一定出现在最末尾的位置，所以后续其实不需要在对他排序
    for (let j = 0; j < arr.length - 1 - i; j++) {
      executeNums++
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.log('执行了:' + executeNums + '次'); //10
  return arr
}
console.log(bubbleSortB(a));

// 冒泡 在最理想的情况下 实现时间复杂度O（n）
let c = [1, 2, 3, 4, 5]
function bubbleSortC (arr) {
  let executeNums = 0
  for (let i = 0; i < arr.length; i++) {
    let flag = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
      executeNums++
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      }
    }
    console.log('执行了:' + executeNums + '次'); //4
    // 若一次交换也没发生，则说明数组有序，直接放过

    if (flag == false) return arr
  }
  return arr
}
console.log(bubbleSortC(c));