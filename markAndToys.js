function runProgram(input) {
    input = input.trim().split('\n');
    let [n, target] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);

    arr.sort((a, b) => a - b);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum <= target) {
            count++
        }
    }
    console.log(count);
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
