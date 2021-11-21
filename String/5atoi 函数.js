// 真题描述：请你来实现一个 atoi 函数，使其能将字符串转换成整数。
const myAtoi = function (str) {
  const max = 2 ** 31 - 1
  const min = -max - 1
  let targetNum = 0
  const reg = /\s*([-\+]?[0-9]*).*/
  // 得到捕获组
  const groups = str.match(reg)
  console.log(groups);
  if (groups) {
    // 尝试转化捕获到的结构
    targetNum = +groups[1]
    // 注意，即便成功，也可能出现非数字的情况，比如单一个'+'
    if (isNaN(targetNum)) {
      // 不能进行有效的转换时，请返回 0
      targetNum = 0
    }
  }
  // 卡口判断
  if (targetNum > max) {
    return max
  } else if (targetNum < min) {
    return min
  }
  // 返回转换结果
  return targetNum
}

console.log(myAtoi('   d123sd'));