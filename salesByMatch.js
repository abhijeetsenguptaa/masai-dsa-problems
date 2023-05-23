function salesByMatch(size, arr) {
    let obj = {};
    let countPairs = 0;
    for (let i of arr) {
        obj[i] = obj[i] + 1 || 1;
        if (obj[i] % 2 == 0) {
            countPairs++;
        }
    }
    console.log(countPairs);
}
function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    salesByMatch(size, arr);
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