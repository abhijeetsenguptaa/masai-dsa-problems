function halfPalindrome(N, str) {
    let str1 = "";
    let str2 = "";

    for (let i = 0; i < N / 2; i++) {
        str1 += str[i];
    }
    for (let i = N / 2; i < N; i++) {
        str2 += str[i];
    }

    if (isPalindrome(str1) && isPalindrome(str2)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}


function isPalindrome(str) {
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