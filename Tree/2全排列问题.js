/* 全排列
题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

示例：   
输入: [1,2,3]
输出: [
[1,2,3],
[1,3,2],
[2,1,3],
[2,3,1],
[3,1,2],
[3,2,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permute = function (nums) {
  const result = []
  // curGroup 变量用来记录当前的排列内容
  const curGroup = []
  // 用来避免重复使用同一个数字
  const map = {}
  function dfc (nth) {
    //这个参数nth 可以理解为第几个坑位（做三个数据做全排列，其实可以理解为有三个坑，每个坑填一个数据，每填一个手里的数据也就少一个）
    //说明已经组合到最后一种情况了（也可以理解为到了第四个坑位，但是实际是没有第四个坑,触碰递归边界）
    if (nth === nums.length) {
      //浅拷贝一份数据并记录下来
      result.push(curGroup.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 若 map[nums[i]为false表示这个数字之前没被其它坑位用过，可以理解为“这个数字剩下了”
      if (!map[nums[i]]) {
        map[nums[i]] = true
        curGroup.push(nums[i])
        dfc(nth + 1)
        map[nums[i]] = false
        curGroup.pop()
      }
    }
  }
  dfc(0)
  return result
}
let a = [1, 2, 3]
console.log(permute(a));