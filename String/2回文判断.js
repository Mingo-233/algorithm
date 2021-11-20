// 判断一个字符串是否是回文字符串
let  a ='yessey'
let  b ='yesses'
function isPalindrome(str) {
  // 先反转字符串
  const reversedStr = str.split('').reverse().join('')
  // 判断反转前后是否相等
  return reversedStr === str
}

function isPalindrome2(str) {
  // 缓存字符串的长度
  const len = str.length
   // 遍历前半部分，判断和后半部分是否对称
  for (let i = 0; i < len/2; i++) {
    if(str[i]!==str[len-i-1]){
      return false
    }
  }
  return true
}

console.log(isPalindrome2(a));