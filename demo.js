let nums = [-1, 0, 0, 1, 2, -1, -4]
// 找到三个相加为0的数

// function sum (nums) {

//   for (let i = 0; i < nums.length; i++) {
//     let target = nums[i]
//     let l = i+1
//     let r =     
//   }
// }


// sum(nums)

// console.log(nums1);
function myInstanceof(left, right) {
  /*
    let proto = left.__proto__
    es6 新写法用 Object.getPrototypeOf(left) 替代 left.__proto__
  */
  let proto = Object.getPrototypeOf(left)

  while(true) {
    if (proto === null) {
      return false
    }
    // 此时左边变量的原型等于右边变量的原型对象
    if (proto === right.prototype) {
      return true
    }
    // 不等于就继续往原型链上找，left.__proto__ = left.__proto__.__proto__
    proto = Object.getPrototypeOf(proto)
  }
}
// 测试

myInstanceof(new Date(), Date);         // true
myInstanceof({}, Object);               // true
myInstanceof('Jason', Number);          // false
// myInstanceof(23, Stirng);               // false
console.log(myInstanceof(new Date(), Date));