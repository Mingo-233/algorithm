/** 0-1 问题
 * 有 n 件物品，物品体积用一个名为 w 的数组存起来，物品的价值用一个名为 value 的数组存起来；
 * 每件物品的体积用 w[i] 来表示，每件物品的价值用 value[i] 来表示。现在有一个容量为 c 的背包，问你如何选取物品放入背包，
 * 
 * 现在问选n件最大价值为多少

注意：每种物品都只有1件
ex：
n 3  w[1,2,3] c v[2,4,6]

f(i, c) 意思是i件商品在c容量下最大价值
现在，假设背包已满，容量已经达到了 c。站在c这个容量终点往后退，考虑从中取出一样物品，那么可能被取出的物品就有 i 种可能性。
取出一件物品存在两个情况， 1这件商品不在背包中 2这件取出的商品确实存在背包中 
第一种情况 即本来这个背包中就没有 i 这个东西，那么尝试取之前和尝试取之后，背包中的价值总量是不会发生变化的。 f(i, c) = f(i-1, c)
第二种情况 即但如果背包中是有 i 的，那么取出这个动作就会带来价值量和体积量的减少： f(i, c)-v[i] = f(i-1, c-w[i])  根据这个式子可以推出 f(i, c) = f(i-1, c-w[i]) + v[i] 这就是这个需求的关系转移公式
综上 最大价值为  dp[i][c] = Math.max(dp[i-1][c], dp[i-1][c-w[i]] + v[i])

for(let i=1;i<=n;i++) {
    for(let c=w[i]; c<=C;i++) {
      dp[i][c] = Math.max(dp[i-1][c], dp[i-1][c-w[i]]+v[i])
    }
}
 */

function knapsack2(n, c, w, value) {
  // dp是动态规划的状态保存数组
  // const dp = new Array(c+1,c) 
  function createArray(m,n){
    return new Array(m).fill('').map(d=>new Array(n).fill(0))
  }
  
  let dp = createArray(n,c)
  // console.log(dp[0][0]) //0
  // res 用来记录所有组合方案中的最大值
  // let dp=[][]
  let res = -Infinity
  for(let i=1;i<=n;i++) {
    for(let v=w[i]; v<=c;v++) {
      dp[i][v] = Math.max(dp[i-1][v], dp[i-1][v-w[i]]+value[i])
      if(dp[i][v]>res){
        res = dp[i][v]
      }
    }
}
  return res
}
// 入参是物品的个数和背包的容量上限，以及物品的重量和价值数组
function knapsack(n, c, w, value) {
  // dp是动态规划的状态保存数组
  const dp = (new Array(c+1)).fill(0)  
  // res 用来记录所有组合方案中的最大值
  let res = -Infinity
  for(let i=1;i<=n;i++) {
      for(let v=c;v>=w[i];v--) {
          // 写出状态转移方程
          dp[v] = Math.max(dp[v], dp[v-w[i]] + value[i])
          // 即时更新最大值
          if(dp[v] > res) {
              res = dp[v]
          }
      }
  }
  return res
}

console.log(knapsack2(3,5,[1,2,3],[2,4,6]));
console.log(knapsack(3,5,[1,2,3],[2,4,6]));