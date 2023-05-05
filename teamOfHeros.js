function teamOfHeros(N, K, A) {
    let flag = "No";
    for (x = 0; x < N; x++) {
        for (y = 0; y < N; y++) {
            if (A[x] + A[y] == K && x != y) {
                flag = "Yes";
            }
        }
    }
    console.log(flag);
}
function runProgram(input) {
    input = input.trim().split("\n");
    let t = +input[0];
    let line = 1;
    for (i = 0; i < t; i++) {
        let [N, K] = input[line].split(" ").map(Number);
        line++;
        let A = input[line].split(" ").map(Number);
        line++;

        teamOfHeros(N, K, A);
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