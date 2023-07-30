// 过滤大于10的数字
const greaterThan10 = num => num > 10
// 乘以2
const multiplyBy2 = num => num * 2


// Data - First

// const filterDF = data => predicate => data.filter(predicate)
// const mapDF = data => fn => data.map(fn)



// // 嵌套调用实现函数的组合
// const processDataDF = data => mapDF(filterDF(data)(greaterThan10))(multiplyBy2)

// const data = [5, 10, 15, 20]
// // 输出 [30, 40]
// console.log(processDataDF(data))


// Data - Last

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)
let R = { compose }
const filterDL = predicate => data => data.filter(predicate)
const mapDL = fn => data => data.map(fn)

// compose 实现函数组合
const processDataDL = data => R.compose(mapDL(multiplyBy2), filterDL(greaterThan10))(data)

const data = [5, 10, 15, 20]
// 输出 [30, 40]
console.log(processDataDL(data))


// const testArr = [1,2,4]
// testArr.map((item, index, arr) => {
//   return item + 1
// })
