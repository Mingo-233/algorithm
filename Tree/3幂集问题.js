/* 
题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。

示例: 输入: nums = [1,2,3]
输出:
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]

*/ 
/** 这道题和之前的全排列十分相似，同样可以理解为有三个坑位要填，但是不同的是这次数字的个数是动态的，而静态的是三个数字本身，
 * 所以这三个坑位就是这个三个数字。额外注意的是，坑位不填也是一种填，这个数字不是一定要用的。
 * @param {number[]} nums
 * @return {number[][]}
 */
// 入参是一个数组
const subsets = function(nums) {
  let result = []
  let curGroup = []
  dfs(0)
  function dfs(index){
    //入参是 nums 中的数字索引
    //每次进入这个函数，就表示有一个新的排列组合诞生了，把他获取下来
    result.push(curGroup.slice())
    for (let i = index; i < nums.length; i++) {
      curGroup.push(nums[i])
       // 基于当前数字存在于组合中的情况，进一步 dfs
      dfs(i+1)
      //当三个坑位都填好之后，回退，把用过的数字放回去
      curGroup.pop()
    }
  }
  return result
};
let a = [1, 2, 3]
console.log(subsets(a));