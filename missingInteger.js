function missingInteger(arr) {
    let count = 1;

    arr.sort((a, b) => a - b);
    let stack = [];
    for (i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
        if (stack.length != 0 && stack[stack.length - 1] == count) {
            stack.pop();
            count++;
        } else {
            console.log(arr[i] - 1);
            break;
        }
    }
}
function runProgram(input) {
    input = input.trim().split("\n");

    let arr = input[0].trim().split(" ").map(Number);

    missingInteger(arr);
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