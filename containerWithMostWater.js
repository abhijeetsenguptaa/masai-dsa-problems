function runProgram(input) {
    input = input.trim().split('\n');
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
        let size = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);

        let max = 0;
        let left = 0;
        let right = size - 1;

        while (left < right) {
            let low = Math.min(arr[left], arr[right]);
            let high = right - left;
            let area = low * high;

            max = Math.max(max, area);

            if (arr[left] < arr[right]) {
                left++
            } else {
                right--
            }
        }
        console.log(max)
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