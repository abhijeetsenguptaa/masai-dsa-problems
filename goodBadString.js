function goodBadString(S) {
    let result = "";
    for (let i = 0; i < S.length; i++) {
        if (S[i + 1] != S[i]) {
            result += S[i];
        }
    }
    console.log(result)
}
