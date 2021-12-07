/**
 * 题目描述：给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
示例1：
输入: coins = [1, 2, 5], amount = 11

输出: 3
解释: 11 = 5 + 5 + 1
 */

// 思路：
// 假设amount 为36，手里有n枚硬币，c1表示第一枚 cn表示第n枚，当36减去一枚硬币的钱，此时还有多少种情况？针对减去一枚的情况再减去一枚，此时还有多少种情况，一直细分下去，我们的树就出来了，递归的边界就是手里的钱减为0。
// f(36) = Math.min(f(36-c1)+1,f(36-c2)+1,f(36-c3)+1......f(36-cn)+1) 这就是这个问题的状态转移方程
// 上面所讲的思路 是自顶向下的，从未知出发到已知。  而下面的代码实现，是从自底向上的，从已知出发。
const coinChange = function (coins, amount) {
  let f = []
  // 即f(x)这个函数表示的是x元钱的时候 最少几枚硬币可以拼凑  
  // 提前定义已知情况，当金额为0时，0枚硬币
  f[0] = 0
  
  for (let i = 1; i <= amount; i++) {
    f[i] = Infinity
    // 这个arr数组里装的是 f(36-c1)+1,f(36-c2)+1,f(36-c3)+1......f(36-cn)+1
    let arr = []
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        // 这里的+1，这个1就是当前这个情况拿走的一枚硬币。 
        //i是当前的金额，拿走一枚面值为coins[j]的硬币，此时f（n）的值就是减去这枚的硬币后需要几枚，因为之前拿走了一枚，所以要加上1
        arr.push(f[i - coins[j]] + 1)
      }
    }
    console.log(arr);
    f[i] = Math.min(...arr)
  }
  if (f[amount] === Infinity) {
    return -1
  }
  // 若有解，直接返回解的内容
  return f[amount]
};
console.log(coinChange([1,2,5], 14));

// const coinChange = function(coins, amount) {
//   // 用于保存每个目标总额对应的最小硬币个数
//   const f = []
//   // 提前定义已知情况
//   f[0] = 0
//   // 遍历 [1, amount] 这个区间的硬币总额
//   for(let i=1;i<=amount;i++) {
//       // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
//       f[i] = Infinity
//       // 循环遍历每个可用硬币的面额
//       for(let j=0;j<coins.length;j++) {
//           // 若硬币面额小于目标总额，则问题成立
//           if(i-coins[j]>=0) {
//               // 状态转移方程
//               f[i] = Math.min(f[i],f[i-coins[j]]+1)
//           }
//       }
//   }
//   // 若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回-1
//   if(f[amount]===Infinity) {
//       return -1
//   }
//   // 若有解，直接返回解的内容
//   return f[amount]
// };