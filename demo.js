const arr = [3, 4, [1, [5, 6]]]

const flat = arr => arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flat(cur) : cur), [])

console.log(flat(arr));