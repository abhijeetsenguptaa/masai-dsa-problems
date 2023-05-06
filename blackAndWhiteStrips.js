function blackAndWhite(n, str, k) {
    let minCount = Infinity;
    for (let i = 0; i <= n - k; i++) {
        count = 0;
        for (let j = i; j < i + k; j++) {
            if (str[j] === "W") {
                count++;
            }
        }
        minCount = Math.min(minCount, count);
    }
    console.log(minCount);
}
function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let [n, k] = input[line++].trim().split(' ').map(Number);
        let str = input[line++];


        blackAndWhite(n, str, k);
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