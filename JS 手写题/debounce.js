// 实现防抖函数（debounce）
// 连续触发在最后一次执行方法，场景：输入框匹配
let debounce = (fn,time = 1000) => {
    let timeLock = null

    return function (...args){
        clearTimeout(timeLock)
        timeLock = setTimeout(()=>{
            fn(...args)
        },time)
    }
}