function runProgram(input) {
    input = input.trim().split('\n');
    let [n, k] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);

    arr.sort((a, b) => a - b);
    let total = 0, multiply = 1;
    for (let i = n - 1; i >= 0; i--) {
        total += multiply * arr[i];
        if ((n - i) % k === 0) {
            multiply++;
        }
    }
    console.log(total);
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