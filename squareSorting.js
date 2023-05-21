function swap(arr, i, j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);


        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                let sq = arr[j] ** 2;
                let sq2 = arr[j + 1] ** 2;
                if (sq > sq2) {
                    swap(arr, j, j + 1);
                }
            }
        }
        console.log(arr.join(' '))
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