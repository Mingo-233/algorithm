/*题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串
输入: "()[]{}"
输出: true

输入: "([)]"
输出: false

输入: "{[]}"
输出: true*/

const leftToRight={
  '[':']',
  '{':'}',
  '(':')',
}
function isVaild(s){
  if(!s) return true
  const len = s.length
  let stack = []
  for (let i = 0; i < len; i++) {
    let cur = s[i]
    if(['[','{','('].includes(cur)){
      // debugger
      stack.push(leftToRight[cur])
    }else{
      //将与之对应的括号出栈，若不存在对应的，则说明该字符串不是有效字符串
      if(stack.length && stack.pop() !==cur){
        return false
      }
    }
  }
  // 若遍历完成，栈为空则表示是有效字符串
  return !stack.length
}
console.log(isVaild('()[]{}'));
console.log(isVaild('[)'));
console.log(isVaild('{[]}'));
