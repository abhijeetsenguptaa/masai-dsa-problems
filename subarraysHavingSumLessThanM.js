function subarraysHavingSumLessThanM(N, M, arr) {
    let slow = 0;
    let fast = 0;
    let count = 0;
    let sum = arr[0];
    while (slow < N && fast < N) {
        if (sum < M) {
            fast++;
            if (fast >= slow) {
                count += fast - slow
            }
            if (fast < N) {
                sum += arr[fast];
            }
        } else {
            sum -= arr[slow];
            slow++;
        }
    }
    console.log(count);
}
function runProgram(input) {
    input = input.trim().split("\n")

    t = +input[0];
    line = 1;

    for (i = 0; i < t; i++) {
        let [N, M] = input[line].split(" ").map(Number);
        line++;
        let arr = input[line].split(" ").map(Number);
        line++;

        subarraysHavingSumLessThanM(N, M, arr);
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