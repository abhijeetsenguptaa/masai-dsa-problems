function atillasProblem(n, str) {
    let string = "abcdefghijklmnopqrstuvwxyz";

    let index = [];
    for (let i = 0; i < n; i++) {
        if (string.includes(str[i])) {
            index.push(string.indexOf(str[i]) + 1)
        }
    }

    index.sort((a, b) => b - a);
    console.log(index[0])
}
