function sumOfSquare(k) {
    let left = 0;
    let right = Math.floor(Math.sqrt(k));
    let flag = false;

    while (left <= right) {
        const sum = left * left + right * right;
        if (sum === k) {
            flag = true;
            break;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    flag ? console.log(flag) : console.log(flag);
}
