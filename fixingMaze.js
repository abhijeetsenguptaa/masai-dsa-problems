function minimumChanges(n, m, mat) {
    let Dc = 0, Rc = 0;
    for (let i = 0; i < mat[0].length; i++) {
        if (mat[mat.length - 1][i] == "D") {
            Dc++
        }
    }
    for (let i = 0; i < mat.length; i++) {
        if (mat[i][mat[0].length - 1] == "R") {
            Rc++
        }
    }
    let res = Dc + Rc
    console.log(res)
}



function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;

    for (let i = 0; i < tc; i++) {
        let [n, m] = input[line++].trim().split(' ').map(Number);
        let maze = [];

        for (let i = 0; i < n; i++) {
            maze.push(input[line++].trim().split(''))
        }

        minimumChanges(n, m, maze)
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