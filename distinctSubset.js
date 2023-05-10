let output = [];
function subset(result, arr, low, high) {
    if (low <= high + 1 && result.length != 0) {
        output.push(result);
    }

    for (let i = low; i <= high; i++) {
        subset(result + arr[i], arr, i + 1, high);
    }

}
function runProgram(input) {
    input = input.trim().split('\n');
    let size = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    subset(0, arr, 0, size - 1);

    let obj = {};

    for (let i = 0; i < output.length; i++) {
        if (obj[output[i]] == undefined) {
            obj[output[i]] = 1
        } else {
            obj[output[i]]++
        }
    }
    let final = "";
    for (key in obj) {
        final += key + " ";
    }
    console.log(final);
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
