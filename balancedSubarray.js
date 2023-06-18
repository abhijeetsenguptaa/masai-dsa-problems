function balancedSubarray(arr, n) {
    let map = new Map([[0, -1]]);
    let result = 0;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i] == 1 ? 1 : -1;

        if (map.has(sum)) {
            result = Math.max(result, i - map.get(sum))
        } else {
            map.set(sum, i)
        }
    }
    return result;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);

        console.log(balancedSubarray(arr, n))
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