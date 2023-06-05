function removeAdjacent(size, arr) {
    let stack = [];
    let top = -1;
    for (let i = 0; i < arr.length; i++) {
        if (stack.length == 0) {
            top++;
            stack[top] = arr[i];
        } else {
            if (arr[i] == stack[top]) {
                stack.pop();
                top--;
            } else {
                top++;
                stack[top] = arr[i]
            }
        }
    } if (stack.length == 0) {
        console.log("-1")
    } else {
        console.log(stack.join(""));
    }
}
function runProgram(input) {
    input = input.trim().split("\n")
    let T = +input[0];
    let line = 1;
    for (let i = 0; i < T; i++) {
        let size = +input[line];
        line++;
        let arr = input[line];
        line++;

        removeAdjacent(size, arr);
    }
}

if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}