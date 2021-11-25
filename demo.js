function sleep (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}


// 这样是可以实现所有回调函数同步运行的
async function fun(cbs) {
  for (let i = 0; i < cbs.length; i++) {
    await cbs[i]()
  }
}
/* 使用foreach却不行 为什么？
原因是forEach的原理是里面使用了while循环，每次循环都会执行一次回调函数，而下面这种写法，相当于执行了多次async await函数。
注意：如何想要堵塞，是必须在一个async函数内部去堵塞，才能实现同步关系。例如 fun3内部的a函数和b函数
而执行单独每个async函数，他们其实之间是异步关系。例如 async function fun  和async function fun2

*/
async function fun2(cbs) {
  cbs.forEach(async(item) => {
    await item()
  });
  
}

async function fun3(){
  await a()
  await b()
}
/*
所以，怎么用foreach实现我们想要的效果？
答案是 我们手写一个
*/

Array.prototype.myForEach = async function (callback,thisArg ) {
  //指向这个函数的调用者
  const _arr = this,
        _isArray = Array.isArray(thisArg),
  //foreach的第二个参数，当执行回调函数 callback 时，用作 this 的值。
        _thisArg = _isArray ? Object(thisArg):window

  for (let i = 0; i < _arr.length; i++) {
    await callback.call(_thisArg,_arr[i],i,_arr) 
  } 
}

async function fun4(cbs) {
  cbs.myForEach(async(fn) => {
    await fn()
  });
  
}

fun4([
  ()=>console.log('1'),
  ()=>sleep(1000),
  ()=>console.log('2'),
  ()=>sleep(2000),
  ()=>console.log('3'),
  ()=>sleep(3000),
  ()=>console.log('4'),
])