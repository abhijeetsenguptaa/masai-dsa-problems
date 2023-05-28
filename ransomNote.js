function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let [n, m] = input[line++].trim().split(' ').map(Number);
        let arr1 = input[line++].trim().split(' ');
        let arr2 = input[line++].trim().split(' ');


        for (let i = 0; i < arr1.length; i++) {
            let flag = false;
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    arr2.splice(j, 1);
                }
            }
        }
        if (arr2.length == 0) {
            console.log("Yes");
        } else {
            console.log("No");
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