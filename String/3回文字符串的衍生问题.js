// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

let str = 'abca'
let str1 = 'abdbada'

function validPalindrome (s){
  let len = s.length
  let l = 0
  let r = len-1
  while(l<r&&s[l]==s[r]){
    l++
    r--
  }
  if(isPalindrome(l+1,r)){
    return true
  }
  if(isPalindrome(l,r-1)){
    return true
  }
  function isPalindrome(st,en){
    while(st<en){
      if(s[st]!==s[en]){
        return false
      }
      st++
      en--
    }
    return true
  }
  return false
}
console.log(validPalindrome(str1));