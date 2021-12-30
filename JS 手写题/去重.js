// 1
let newArr = arr.filter((item, index) => arr.indexOf(item) === index);

// 2
let newArr = arr.reduce((accu, cur) => {
  return accu.includes(cur) ? accu : accu.concat(cur);  // 1. 拼接方法
  // return accu.includes(cur) ? accu : [...accu, cur]; // 2. 扩展运算
}, []);

// 3
let newArr = [...new Set(arr)];      // [1, 2, 4, null, "3", "abc", 3, 5]
let newArr = Array.from(new Set(arr));      // [1, 2, 4, null, "3", "abc", 3, 5]
  let newStr = [...new Set('ababbc')].join('')  //  'abc'
  
// 4
let map = new Map();
let newStr = [];

for (let i = 0; i < arr.length; i++) {
  if (!map.has(arr[i])) {
    map.set(arr[i], true);
    newStr.push(arr[i]);
  }
}
console.log(newArr)  // [1, 2, 4, null, "3", "abc", 3, 5]