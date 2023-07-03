function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;
    let matrix = [];

    for (let i = 0; i < tc; i++) {
        matrix.push(input[line++].trim().split(' ').map(Number))
    }

    const n = matrix.length;


    function rotateRing(ring) {
        const len = ring.length;
        const temp = ring[len - 1];

        for (let i = len - 1; i > 0; i--) {
            ring[i] = ring[i - 1];
        }

        ring[0] = temp;
    }


    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1 - layer;
        const ring = [];


        for (let i = first; i < last; i++) {
            ring.push(matrix[first][i]);
        }


        for (let i = first; i < last; i++) {
            ring.push(matrix[i][last]);
        }


        for (let i = last; i > first; i--) {
            ring.push(matrix[last][i]);
        }


        for (let i = last; i > first; i--) {
            ring.push(matrix[i][first]);
        }


        rotateRing(ring);


        let index = 0;


        for (let i = first; i < last; i++) {
            matrix[first][i] = ring[index++];
        }


        for (let i = first; i < last; i++) {
            matrix[i][last] = ring[index++];
        }


        for (let i = last; i > first; i--) {
            matrix[last][i] = ring[index++];
        }

        for (let i = last; i > first; i--) {
            matrix[i][first] = ring[index++];
        }
    }



    for (let i = 0; i < n; i++) {
        let ans = "";
        for (let j = 0; j < n; j++) {
            ans += matrix[i][j] + " "
        }
        console.log(ans)
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