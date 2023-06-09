function runProgram(input) {
    input = input.trim().split('\n');
    let str = input[0];

    let count = 1;
    let output = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++
        } else {
            output += str[i] + count;
            count = 1;
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