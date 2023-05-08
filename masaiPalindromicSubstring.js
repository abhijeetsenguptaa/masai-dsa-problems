function masaiPalSubString(S) {
    let size = 0;
    for (let i = 0; i < S.length; i++) {
        let output = "";
        for (let j = i; j < S.length; j++) {
            output += S[j];
            if (palindromeCheck(output) && output.length > size) {
                size = output.length;
            }
        }
    }
    console.log(size);
}


function palindromeCheck(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    if (str == result) {
        return true;
    } else {
        return false;
    }
}
