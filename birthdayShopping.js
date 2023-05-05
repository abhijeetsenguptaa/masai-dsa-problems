function birthDayShopping(arr, temp, x, target) {
    for (let i = x; i < arr.length; i++) {
        temp.push(arr[i]);
        if (temp.length == target) {
            console.log(temp.join(" "));
        }

        birthDayShopping(arr, temp, i + 1, target);
        temp.pop();
    }
}


function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);

    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    let temp = [];
    birthDayShopping(arr, temp, 0, k);
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
