function runProgram(input) {
    input = input.trim().split('\n');
    let [n, x] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);

    let count = 0;
    let ques = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] <= x && (count == 0 || count == 1)) {
            ques++;
        } else if (arr[i] > x) {
            count++
        } else {
            break;
        }
    }
    console.log(ques);
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
