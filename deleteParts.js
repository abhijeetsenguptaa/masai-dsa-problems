function runProgram(input) {
    input = input.trim().split('\n');
    let n = +input[0];
    let str = input[1];
    let [l, r] = input[2].trim().split(' ').map(Number);

    let output = "";
    for (let i = 0; i < n; i++) {
        if (i < l || i > r) {
            output += str[i]
        }
    }
    console.log(output)
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