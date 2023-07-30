// 实现一个pipe函数，基于这些独立函数，构建一个多个函数串行执行的工作流
function add4(num) {
    return num + 4
}

function multiply3(num) {
    return num * 3
}

function divide2(num) {
    return num / 2
}



function pipe(...fns) {
    return function (params) {
        return fns.reduce((input, fn) => fn(input), params)
    }
}

const compute = pipe(add4, multiply3, divide2)

console.log(compute(1));

// compose：倒序的 pipe
// pipe 用于创建一个正序的函数传送带，而 compose 则用于创建一个倒序的函数传送带。

// 使用展开符来获取数组格式的 pipe 参数
function compose(...funcs) {
    function callback(input, func) {
        return func(input)
    }

    return function (param) {
        return funcs.reduceRight(callback, param)
    }
}
const compute2 = compose(add4, multiply3, divide2)
console.log(compute2(1));
