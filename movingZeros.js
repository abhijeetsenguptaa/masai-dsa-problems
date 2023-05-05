function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);

        let arr2 = [];
        for (let i = 0; i < n; i++) {
            if (arr[i] != 0) {
                arr2.push(arr[i]);
            }
        }

        for (let i = 0; i < n; i++) {
            if (arr[i] === 0) {
                arr2.push(arr[i]);
            }
        }

        console.log(arr2.join(" "));
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
