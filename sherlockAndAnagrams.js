function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let s = input[line++]

        let obj = {};
        let count = 0;

        for (let i = 0; i < s.length; i++) {
            let sub = "";
            for (let j = i; j < s.length; j++) {
                sub += s[j];


                let sort = sub.split('').sort().join('');
                obj[sort] = (obj[sort] || 0) + 1;
            }
        }

        for (key in obj) {
            let counter = obj[key];
            count += (counter * (counter - 1)) / 2
        }
        console.log(count)
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