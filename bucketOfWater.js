function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let n = +input[line++];
        let a = input[line++].trim().split(' ').map(Number);
        let b = input[line++].trim().split(' ').map(Number);


        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += a[i]
        }

        for (let i = 0; i < 2; i++) {
            sum -= b[i]
        }
        if (sum <= 0) {
            console.log("YES");
        } else {
            console.log("NO");
        }
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