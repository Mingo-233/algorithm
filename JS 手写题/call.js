

Function.prototype.myCall = function(context,...args){
  let cxt = context || window;
  //将当前被调用的方法定义在cxt.func上.(为了能以对象调用形式绑定this)
  //新建一个唯一的Symbol变量避免重复
  let func = Symbol() 
  cxt[func] = this;
  console.log(this);
  console.log(args);
  args = args ? args : []
  //以对象调用形式调用func,此时this指向cxt 也就是传入的需要绑定的this指向
  const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
  //删除该方法，不然会对传入对象造成污染（添加该方法）
  delete cxt[func];
  return res;
}


let aa = {
  name:'aa',
  say(){
    console.log(this);
  }
}
let bb = {
  name:'bb'
}
console.log(aa);
aa.say.myCall(bb,'qq',11)