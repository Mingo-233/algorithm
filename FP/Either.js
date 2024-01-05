// Either 盒子
// Either 盒子编码实现如下：
//  Right 意味着正确，正确的情况下向右拐
class Right {
    constructor(value) {
        this.value = value
    }

    // 核心函数 map
    map(fn) {
        return new Right(fn(this.value))
    }
}

// Left 意味着错误，错误的情况下向左拐
class Left {
    constructor(value) {
        this.value = value
    }

    map(fn) {
        // 不进行任何操作，直接返回自身
        return this
    }
}

// 接下来，我们可以实现并调用 divide 函数，该函数使用 Either 盒子处理除数为零的错误：
// 定义 "divide" 函数，使用 Either 盒子处理除数为零的错误
function divide(a, b) {
    if (b === 0) {
        return new Left("除数不能为零")
    } else {
        return new Right(a / b)
    }
}

// 使用 "divide" 函数，通过映射（map）等操作处理结果
// result1: Right(2)
const result1 = divide(4, 2)
// result2: Left("除数不能为零")
const result2 = divide(4, 0)

// 输出 Right(4)
result1.map(value => value * 2)
// 输出 Left("除数不能为零")
result2.map(value => value * 2)


// 通过使用 Either 盒子，我们可以显式地表示函数执行的两种结果（成功 / 失败），同时保持函数的纯粹性。这使得函数更易于组合、重用和维护。
// 在函数式编程中，Maybe 和 Either 恰恰体现了盒子模式对于控制流的巧思——Maybe 和 Either 都是对控制流的封装，
// 这层封装允许我们将函数的控制流处理与实际的业务逻辑解耦，使得函数更加纯粹、更容易推理和测试。

// Maybe 主要用于处理可能存在或不存在的值，它的设计目标是在处理可能为空的值时提供一种安全的方式。
// Maybe 可以帮助我们避免空指针异常，通过链式调用来处理可能为空的值。例如，在一个可能为 null 的值上执行某个操作时，可以使用 Maybe 类型包装，以确保代码不会因为空值而崩溃。

// Either 用于处理两种可能的结果，通常用于表示成功或失败，或者左值和右值。
// Either 提供了一种更通用的方式来处理两个可能的结果，而不仅仅是处理可能为空的情况。它在处理错误或异常时比 Maybe 更加灵活，因为 Left 可以携带错误信息或其他额外的上下文信息。适用于更复杂的场景。