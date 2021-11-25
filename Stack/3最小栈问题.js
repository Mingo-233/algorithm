/*题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。

pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); --> 返回 -3.
minStack.pop();
minStack.top(); --> 返回 0.
minStack.getMin(); --> 返回 -2. */

const MinStack = function(){
  this.stack = []
  //辅助栈 优化解法，记录最小值
  this.stack2 = []
}

MinStack.prototype.push = function(x){
  this.stack.push(x)

  if(this.stack2.length ===0 ||this.stack2[this.stack2.length-1] >x){
    this.stack2.push(x)
  }
}
MinStack.prototype.pop = function(x){
  //如果删除的stack2栈顶的数据，stack2也出栈（保持同步）
  if(this.stack.pop(x)===this.stack2[this.stack2.length-1]){
    this.stack2.pop()
  }
  
}
MinStack.prototype.top = function(x){
  // 取栈顶元素，这里本能地给它一个边界条件判断（其实不给也能通过，但是多做不错哈）
  if(!this.stack || !this.stack.length) return
  return this.stack[this.stack.length-1]
}

//常规解法 时间复杂度O(n)
MinStack.prototype.getMin = function(x){
  if(!this.stack || !this.stack.length) return
  // 设一个非常大的值
  let min = Infinity
  for (let i = 0; i < this.stack.length; i++) {
    if(this.stack[i]<min){
      min = this.stack[i]
    }
  }
  return min
}
//优化解法 时间复杂度O(1)
MinStack.prototype.getMin2 = function(x){
  if(!this.stack2 || !this.stack2.length) return
  return this.stack2[this.stack2.length-1]
}
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); //-3.
minStack.pop();
console.log(minStack.top()); // 0.
console.log(minStack.getMin()); // -2
console.log(minStack.getMin2()); // -2


