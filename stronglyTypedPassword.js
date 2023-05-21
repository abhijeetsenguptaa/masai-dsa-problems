function strongPassword(N, arr) {
    let output = [];

    for (let i = 0; i < N; i++) {
        let flag = false;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == "@" || arr[i][j] == "#" || arr[i][j] == "$" || arr[i][j] == "*") {
                flag = true;
                break;
            }
        }
        if (flag) {
            output.push('strong');
        } else {
            output.push('weak');
        }
    }
    console.log(output.join(' '));
}
