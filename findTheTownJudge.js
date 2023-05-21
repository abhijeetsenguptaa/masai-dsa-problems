function runProgram(input) {
    input = input.trim().split('\n');
    let [m, n] = input[0].trim().split(' ').map(Number);
    let line = 1;
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(input[line++].trim().split(' ').map(Number));
    }

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i][1]] == undefined) {
            obj[arr[i][1]] = 1;
        } else {
            obj[arr[i][1]]++;
        }
    }
    let res = -1;
    for (key in obj) {
        if (n == obj[key]) {
            res = key;
        }
    }

    console.log(res)
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