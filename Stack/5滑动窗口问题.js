/*
题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

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

提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//  双指针+遍历法 时间复杂度O(kn)
const maxSlidingWindow = function (nums, k) {
  const MaxNumArr = []
  for (let i = 0; i < nums.length-2; i++) {
    let left = i
    let right = i+k-1
    let max = nums[left]
    //寻找范围内最大数
    for (let j = left+1; j <= right; j++) {
      if(nums[j]>max){
        max = nums[j]
      }
    }

    MaxNumArr.push(max)
  }
  return MaxNumArr
}
let nums = [1,3,-1,-3,5,3,6,7]
console.log(maxSlidingWindow(nums,3));
// 输出: [3,3,5,5,6,7]