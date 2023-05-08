function runProgram(input) {
    input = input.trim().split("\n");

    n = +input[0];

    let height = 0;
    let stonesUsed = 0;

    while (stonesUsed <= n) {
        height++;
        stonesUsed += (height * (height + 1)) / 2;
    }

    console.log(height - 1);
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
