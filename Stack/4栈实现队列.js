/*题目描述：使用栈实现队列的下列操作：
push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。

示例:

MyQueue queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.peek(); // 返回 1
queue.pop(); // 返回 1
queue.empty(); // 返回 false */

/**
 * 初始化构造函数
 */
 const MyQueue = function () {
  // 初始化两个栈
  this.stack1 = [];
  this.stack2 = [];
};
MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
}
MyQueue.prototype.pop = function () {
  // 假如 stack2 为空，需要将 stack1 的元素转移进来
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  //为实现FIFO，从第二个栈出列
  return this.stack2.pop()
}
MyQueue.prototype.peek = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  // 这个方法和 pop 唯一的区别就是没有将定位到的值出栈
  const stack2Len =this.stack2.length
  return stack2Len && this.stack2[stack2Len - 1]
}
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0
}
const queue = new MyQueue()

queue.push(1);
queue.push(2);
console.log(queue);
console.log(queue.peek());  // 返回 1
console.log(queue.pop()); // 返回 1
console.log(queue.empty()); // 返回 false
