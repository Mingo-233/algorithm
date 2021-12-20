
// 实现节流函数（throttle）
// 在一定时间内只触发一次，场景：长列表滚动节流
let throttle = (fn, time = 1000) => {
  let flag = true;

  return function (...args) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        fn(...args)
        flag = true;
      }, time)
    }
  }
}