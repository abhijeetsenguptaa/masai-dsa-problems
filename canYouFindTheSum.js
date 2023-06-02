function canYouFindTheSum(n, arr) {
    let left = leftToRight(n, arr);
    let right = rightToLeft(n, arr);
    let output = "";
    for (let i = 0; i < n; i++) {
        output += left[i] + right[i] + " ";
    }
    console.log(output)
}


function rightToLeft(n, arr) {
    let stack = [];
    let res = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length != 0 && arr[i] >= arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length == 0) {
            res[i] = -1;
        } else {
            res[i] = stack[stack.length - 1] + 1
        }
        stack.push(i)
    }
    return res;
}

function leftToRight(n, arr) {
    let stack = [];
    let res = [];
    for (let i = 0; i < n; i++) {
        while (stack.length != 0 && arr[i] >= arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length == 0) {
            res[i] = -1;
        } else {
            res[i] = stack[stack.length - 1] + 1
        }
        stack.push(i)
    }
    return res;
}

function runProgram(input) {
    input = input.trim().split('\n');
    let n = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    canYouFindTheSum(n, arr);
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