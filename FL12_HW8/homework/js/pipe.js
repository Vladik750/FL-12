function pipe() {
    let a = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        a = arguments[i](a);
    }
    return a;
}

function addOne(x) {
    return x + 1;
}

console.log(pipe(1, addOne, addOne, addOne));