/*
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

解释: 滑动窗口的位置
---------------
[1 3 -1] -3 5 3 6 7

1 [3 -1 -3] 5 3 6 7
1 3 [-1 -3 5] 3 6 7
1 3 -1 [-3 5 3] 6 7
1 3 -1 -3 [5 3 6] 7
1 3 -1 -3 5 [3 6 7]
最大值分别对应：

3 3 5 5 6 7
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 const maxSlidingWindow = function (nums, k) {
  // 缓存数组的长度
  const len = nums.length;
  // 初始化结果数组
  const result = [];
  // 初始化双端队列
  const deque = [];
  for (let i = 0; i < len; i++) {
    // 若当前值大于双端队列中的值，则原双端队列中的值一个个出栈，目的是形成递减队列，队首的值是最大值
    while (deque.length && deque[deque.length - 1] < nums[i]) {
      deque.pop()
    }
    deque.push(nums[i])
    //表示第一个滑动窗口内的元素已经遍历完，可以开始存储最大值了
    if (i >= k-1) {
      result.push(deque[0])
      //i-k+1 是窗口最左侧位置
      //因为当前队列是递减队列，所以队首的值一定是最大值，如果队首的值和窗口范围的最左侧值相同（意味着再右移一次，这个最大值就不包含在窗口范围内了
      //所以要把他从双端队列中移除出去）
      if(nums[i-k+1]===deque[0]){
        deque.shift()
      }
    }
    
  }
  return result
}
let nums = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(maxSlidingWindow(nums,3));
// 输出: [3,3,5,5,6,7]