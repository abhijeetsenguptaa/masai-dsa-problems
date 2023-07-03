function competeWithNeighborReturns(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    for (let length = 2; length <= n; length++) {
        for (let i = 0; i < n - length + 1; i++) {
            const j = i + length - 1;
            const a = (i + 2 <= j) ? dp[i + 2][j] : 0;
            const b = (i + 1 <= j - 1) ? dp[i + 1][j - 1] : 0;
            const c = (i <= j - 2) ? dp[i][j - 2] : 0;

            dp[i][j] = Math.max(nums[i] + Math.min(a, b), nums[j] + Math.min(b, c));
        }
    }

    const totalScore = dp[0][n - 1];
    const opponentScore = nums.reduce((a, b) => a + b, 0) - totalScore;

    return [totalScore, opponentScore];
}

function runProgram(input) {
    input = input.trim().split('\n');

    let n = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    console.log(competeWithNeighborReturns(arr).join(' '))
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