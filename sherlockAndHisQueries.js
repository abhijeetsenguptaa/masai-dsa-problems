function findOdd(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 !== 0) {
                ans++;
            }
        }
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    let index = 1;
    for (let testCase = 0; testCase < t; testCase++) {
        let [n, m] = newInput[index++].trim().split(" ").map(Number);
        let q = Number(newInput[index++]);

        let arr = [];
        for (let i = 0; i < n; i++) {
            let row = [];
            for (let j = 0; j < m; j++) {
                row.push(0);
            }
            arr.push(row);
        }

        let queries = [];
        for (let j = 0; j < q; j++) {
            queries.push(newInput[index++]);
        }

        for (let j = 0; j < queries.length; j++) {
            let [type, idx] = queries[j].trim().split(" ").map(Number);
            if (type === 0) {
                for (let k = 0; k < m; k++) {
                    arr[idx][k]++;
                }
            } else {
                for (let k = 0; k < n; k++) {
                    arr[k][idx]++;
                }
            }
        }
        console.log(findOdd(arr));
    }
}

if (process.env.USERNAME === "") {
    runProgram();
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
