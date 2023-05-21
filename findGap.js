function findGap(N, X, arr) {
    let flag = false;
    for (let i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if (arr[i] - arr[j] == X) {
                flag = true;
                break;
            }
        }
    }
    flag ? console.log('Yes') : console.log('No')
}
