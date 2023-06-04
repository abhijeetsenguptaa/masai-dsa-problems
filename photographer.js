function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
        let [n, x] = input[line++].trim().split(' ').map(Number);
        let arr = input[line++].trim().split(' ').map(Number);


        let front = [];
        let back = [];
        arr.sort((a, b) => a - b);
        for (let i = 0; i < n; i++) {
            front.push(arr[i])
        }
        for (let i = n; i < 2 * n; i++) {
            back.push(arr[i])
        }
        let flag = "YES";
        for (let i = 0; i < front.length; i++) {
            if (front[i] + x > back[i]) {
                flag = "NO";
                break;
            }
        }
        console.log(flag);
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
