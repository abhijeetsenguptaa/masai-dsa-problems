function lowerBound(n, k, arr) {
    let left = 0;
    let right = n - 1;
    let flag = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] >= k) {
            flag = mid;
            right = mid - 1;
        } else {
            left = left + 1;
        }
    }
    arr[flag] == k ? console.log(flag) : console.log('-1');
}
function runProgram(input) {
    input = input.trim().split('\n');
    let [n, k] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);

    lowerBound(n, k, arr);
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