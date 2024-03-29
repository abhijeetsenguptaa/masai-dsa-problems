function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);

        let sum = 0;
        let left = 0;
        let right = n - 1;
        if (n % 2 != 0) {
            let i = Math.floor(n / 2);
            sum += arr[i]
        }
        while (left < right) {
            let i = String(arr[left]) + String(arr[right]);
            sum += (+i);
            left++
            right--
        }
        console.log(sum)
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