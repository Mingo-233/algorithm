// 在这个示例中，我们使用 Either 结构来处理文件读取的情况。readFile 函数返回一个 Either 对象，表示文件读取的结果，可以是成功（Right）或失败（Left）情况。通过 fold 方法
// 能够轻松地处理这两种情况，而不必使用异常或条件语句。

// 定义一个 Either 结构
class Either {
    constructor(value) {
        this.value = value;
    }

    // 静态工厂方法用于创建成功情况的 Either
    static of(value) {
        return new Right(value);
    }
}

// 成功情况的 Either 子类
class Right extends Either {
    map(fn) {
        return Either.of(fn(this.value));
    }

    // 用于处理成功情况的方法
    fold(rightFn, leftFn) {
        return rightFn(this.value);
    }
}

// 失败情况的 Either 子类
class Left extends Either {
    map(fn) {
        return this;
    }

    // 用于处理失败情况的方法
    fold(rightFn, leftFn) {
        return leftFn(this.value);
    }
}

// 模拟文件读取函数
function readFile(fileName) {
    if (fileName === 'example.txt') {
        return Either.Right('File contents: This is some text.');
    } else {
        return Either.Left('File not found');
    }
}

// 使用 Either 处理文件读取
const file1 = readFile('example.txt');
const file2 = readFile('nonexistent.txt');

// 处理成功情况
file1.fold(
    content => console.log(`Success: ${content}`),
    error => console.error(`Error: ${error}`)
);

// 处理失败情况
file2.fold(
    content => console.log(`Success: ${content}`),
    error => console.error(`Error: ${error}`)
);
