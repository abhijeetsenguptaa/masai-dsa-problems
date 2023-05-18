function binary(str) {
    for (let i = 0; i < str.length; i++) {
        if ((str[0] == "0" && str[str.length - 1] == "1") || (str[0] == "1" && str[str.length - 1] == "0")) {
            str.splice(0, 1);
            str.splice(str.length - 1, 1)
        }
    }
    console.log(str.length)
}
function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let n = +input[line++];
        let str = input[line++].trim().split('');

        binary(str);
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