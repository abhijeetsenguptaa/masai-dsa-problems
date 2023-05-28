function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let N = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);


        arr.sort((a, b) => a - b);

        let sum = 0;
        let count = 0;
        for (let i = N; i < arr.length - N; i++) {
            sum += arr[i];
            count++
        }
        console.log(Math.floor(sum / count))
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