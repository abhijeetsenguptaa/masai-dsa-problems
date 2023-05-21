function alternatingCharacters(str) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++
        } else {
            sum += count;
            count = 0
        }
    }
    console.log(sum)
}
function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let str = input[line++];


        alternatingCharacters(str)
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