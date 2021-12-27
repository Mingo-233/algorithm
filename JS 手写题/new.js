

function myNew(fn, ...args) {

  // 1. 创建一个空对象，将这个对象的原型指向构造函数的原型对象
  let obj = {
    __proto__: fn.prototype
  }

  // 2. 执行构造函数，把里面的 this 指到这个对象
  let res = fn.apply(obj, args)

	// 优先返回构造函数返回的对象
  // 3. 返回值为 object 类型则作为 new 方法的返回值返回，否则返回这个空对象.
  return res instanceof Object ? res : obj
  
}


