// Maybe Functor：识别空数据
// Maybe Functor 在 Identity Functor 的基础上，增加了对空数据的校验。

const isEmpty = x => x === undefined || x === null

const Maybe = x => ({
    map: f => isEmpty(x) ? Maybe(null) : Maybe(f(x)),
    valueOf: () => x,
    inspect: () => `Maybe {${x}}`
})


function add4(x) {
    return x + 4
}

function add8(x) {
    return x + 8
}

function toString(x) {
    return x.toString()
}

function addX(x) {
    return x + 'X'
}

function add10(x) {
    return x + '10'
}

const res = Maybe(10)
    .map(add4)
    .map(add8)
    .map(toString)
    .map(addX)
    .inspect()

// 输出 Maybe {null}
console.log(res)
