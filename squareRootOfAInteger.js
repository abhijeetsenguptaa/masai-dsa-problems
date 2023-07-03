function sqrt(number) {
    if (number < 0) {
        return NaN;
    }

    let result = 0;
    let bit = 1 << 30;

    while (bit > number) {
        bit >>= 2;
    }

    while (bit !== 0) {
        const temp = result + bit;

        if (number >= temp) {
            number -= temp;
            result = (result >> 1) + bit;
        } else {
            result >>= 1;
        }

        bit >>= 2;
    }

    return result;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let n = +input[line++];

        console.log(sqrt(n));
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