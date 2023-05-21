function stringCut(s) {
    let result = "";
    if (s.length % 2 != 0) {
        let x = Math.floor(s.length / 2)
        for (let i = x - 1; i >= 0; i--) {
            result += s[i];
        }
        result += s[x];
        for (let i = s.length - 1; i > x; i--) {
            result += s[i];
        }
    } else {
        for (let i = s.length / 2 - 1; i >= 0; i--) {
            result += s[i];
        }
        for (let i = s.length - 1; i >= s.length / 2; i--) {
            result += s[i];
        }
    }
    console.log(result)
}
