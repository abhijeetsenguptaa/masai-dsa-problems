function runProgram(input) {
    input = input.trim().split('\n');
    let n = +input[0]
    let arr1 = input[1].trim().split(' ').map(Number);
    let arr2 = input[2].trim().split(' ').map(Number);

    let count = 0;
    let x = 0;
    let y = 0;

    for (let i = 0; i < Infinity; i++) {
        if (arr1[x] != arr2[y]) {
            count++;
            y++;
        }
        
        if (arr1[x] == arr2[y]) {
            count++;
            arr2.splice(y, 1);
            y = 0;
            x++;
        }

        if (arr2.length == 0) {
            break;
        }
    }
    console.log(count - 1);
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