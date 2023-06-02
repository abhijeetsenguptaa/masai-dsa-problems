function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
        let [n, m] = input[line++].trim().split(' ').map(Number);
        let arr1 = input[line++].trim().split(' ').map(Number);
        let arr2 = input[line++].trim().split(' ').map(Number);


        const set1 = new Set(arr1);
        const set2 = new Set(arr2);

        let arr3 = [];
        let arr4 = [];

        for (let key of set1) {
            if (!set2.has(key)) {
                arr3.push(key);
            }
        }

        for (let key of set2) {
            if (!set1.has(key)) {
                arr4.push(key);
            }
        }

        arr3.sort((a, b) => a - b);
        arr4.sort((a, b) => a - b);
        console.log(arr3.join(' '))
        console.log(arr4.join(' '))
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