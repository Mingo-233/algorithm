/*及时回溯，即为“剪枝”  
在寻找这三对结点组合的过程中，我们一旦找到一对，就停止继续往深处搜索，这就意味着一些结点压根没有机会被遍历到。
这其实就是“剪枝”的过程——在深度优先搜索中，有时我们会去掉一些不符合题目要求的、没有作用的答案，进而得到正确答案。
这个丢掉答案的过程，形似剪掉树的枝叶，所以这一方法被称为“剪枝”。   
题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
示例: 输入: n = 4, k = 2
输出:
[
[2,4],
[3,4],
[2,3],
[1,2],
[1,3],
[1,4],
]
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 const combine = function(n, k) {
  const result = []
  const curGroup = []
  bfc(1)
   function bfc (index){
     //当且仅当组合内数字个数为 k 个时，才会对组合结果数组进行更新。
     if(curGroup.length ===k){
       result.push(curGroup.slice())
       //递归边界：只要组合内数字个数达到了 k 个，就不再继续当前的路径往下遍历，而是直接返回
       return
     }
     // 从当前数字的值开始，遍历 index-n 之间的所有数字
     for (let i = index; i <= n; i++) {
       curGroup.push(i)
       bfc(i+1)
       //放回已经选过的数字
       curGroup.pop()
     }
   }
   return result
};
console.log(combine(4,2));