function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let n = +input[line++];
        let arr1 = input[line++].trim().split(' ').map(Number);
        let arr2 = input[line++].trim().split(' ').map(Number);

        let count = 0;

        for (let i = 0; i < n; i++) {
            let x = arr1[i] - arr1[i - 1];
            if (i == 0) {
                if (arr2[i] <= arr1[i]) {
                    count++
                }
            } else {
                if (arr2[i] <= x) {
                    count++
                }
            }
        }
        console.log(count);
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