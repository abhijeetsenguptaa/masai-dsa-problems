function AToB(a, b, x, y) {
    if (a == b) {
        return 0;
    }
    if ((a < b && x == 1) || (a > b && y == 1)) {
        return -1;
    }
    let count = Infinity;
    if (a * x <= b) {
        let count1 = AToB(a * x, b, x, y);
        if (count1 != -1) {
            count = Math.min(count, count1 + 1)
        }
    }

    if (a * y <= b) {
        let count2 = AToB(a * y, b, x, y);
        if (count2 != -1) {
            count = Math.min(count, count2 + 1)
        }
    }
    if (count == Infinity) {
        return -1
    } else {
        return count;
    }
}
function runProgram(input) {
    input = input.trim().split('\n');
    let [A, B, X, Y] = input[0].trim().split(' ').map(Number);

    console.log(AToB(A, B, X, Y));
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