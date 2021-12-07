/*题目描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1 阶 + 1 阶 + 1 阶
1 阶 + 2 阶
2 阶 + 1 阶
*/
// 树形思维模型 自顶向下解法
/**
* @param {number} n
* @return {number}
*/
const climbStairs = function (n) {
  // 处理递归边界
if (n === 1) {
  return 1
}
if (n === 2) {
  return 2
}
  // 递归计算
  return climbStairs(n - 1) + climbStairs(n - 2)
};
console.log(climbStairs(4));
// 记忆化搜索法
let f = []
const climbStairs2 = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  // 处理递归边界      3 2
  if (f[n] === undefined) f[n] = climbStairs2(n - 1) + climbStairs2(n - 2)
  return f[n]
}
console.log(climbStairs2(4));
console.log(f);


// 动态规划 自底向上解法
const climbStairs3 = function (n) {
  f[1]=1
  f[2]=2
  // 处理递归边界      
  for (let i = 3; i <=n; i++) {
    f[i]= f[i-1]+f[i-2]
    
  }
  return f[n]
}
console.log(climbStairs3(4));