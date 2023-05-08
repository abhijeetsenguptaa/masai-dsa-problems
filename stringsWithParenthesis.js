function stringWithParenthesis(str) {
    let obj = {
        "]": "[",
        "}": "{",
        ")": "("
    };
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i]);
        }
        else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
            if (stack.length == 0) {
                console.log("unbalanced");
                break;
            } else {
                if (obj[str[i]] == stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    break;
                }
            }
        }
    }
    if (stack.length == 0) {
        console.log("balanced");
    }

    else {
        console.log("unbalanced");
    }
}
function runProgram(input) {
    input = input.trim().split("\n");
    let str = input[0];
    stringWithParenthesis(str)
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