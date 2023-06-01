function warOfMinions(size, str) {
    let stack = [];
    let top = -1;
    for (let i = 0; i < str.length; i++) {
        if (stack.length == 0) {
            top++;
            stack[top] = str[i];
        } else {
            if (str[i] == stack[top]) {
                stack.pop();
                top--;
            } else {
                top++;
                stack[top] = str[i]
            }
        }
    } if (stack.length == 0) {
        console.log("-1")
    } else {
        console.log(stack.join(""));
    }
}
function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    str = input[1];

    warOfMinions(size, str);
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