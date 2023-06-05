function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);

        let set = new Set(arr);
        let flag = 0
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let sum = arr[i] + arr[j];


                if (set.has(sum)) {
                    flag = 1;
                }
            }
        }
        console.log(flag);
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
