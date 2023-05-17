function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let [n, k] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);

        arr.sort((a, b) => a - b);
        let left = 0;
        let right = n - 1;
        let flag = false;

        while (left < right) {
            if (arr[left] + arr[right] == k) {
                flag = true;
                break;
            } else if (arr[left] + arr[right] > k) {
                right--;
            } else {
                left++;
            }
        }

        if (flag) {
            console.log("1");
        } else {
            console.log("-1");
        }
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
