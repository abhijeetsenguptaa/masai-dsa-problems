function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let size = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);

        let stack = [];
        let res = [];
        let output = "";

        for (let i = 0; i < size; i++) {
            let count = 1;
            while (stack.length != 0) {
                if (arr[i] >= stack[stack.length - 1]) {
                    count += res[stack.length - 1];
                    stack.pop();
                    res.pop();
                } else {
                    break;
                }
            }
            stack.push(arr[i]);
            res.push(count);
            output += count += " ";
        }
        console.log(output)
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