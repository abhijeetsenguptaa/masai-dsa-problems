function pirateDromes(n) {
    let result = [];
    for (let i = Math.pow(10, n - 1); i < Math.pow(10, n); i++) {
        let sumOdd = 0;
        let sumEven = 0;
        let numString = i.toString();
        for (let j = 0; j < numString.length; j++) {
            if (j % 2 == 0) {
                sumEven += +(numString.charAt(j));
            } else {
                sumOdd += +(numString.charAt(j));
            }
        }
        if (sumOdd == sumEven) {
            result.push(i);
        }
    }


    console.log(result.join(" "))
}

function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];

    pirateDromes(size)
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
