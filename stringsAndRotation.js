function runProgram(input) {
    input = input.trim().split('\n');
    let str1 = input[0];
    let str2 = input[1];


    let result = "";

    for (let i = str2.length / 2; i < str2.length; i++) {
        result += str2[i];
    }
    for (let i = 0; i < str2.length / 2; i++) {
        result += str2[i];
    }

    if (result == str1) {
        console.log("Yes");
    } else {
        console.log("No");
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