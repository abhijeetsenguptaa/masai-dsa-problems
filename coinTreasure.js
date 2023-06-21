function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let [a, b, c, n] = input[line++].trim().split(' ').map(Number);

        const totalCoins = a + b + c + n;

        if (totalCoins % 3 !== 0) {
            console.log("no");
        }


        const targetCoins = totalCoins / 3;
        if (a <= targetCoins && b <= targetCoins && c <= targetCoins) {
            console.log("yes");
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