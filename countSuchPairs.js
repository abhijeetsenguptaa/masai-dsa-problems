function countPossiblePairs(n, m) {
    let count = 0;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (Math.pow(i, 2) + j == n && Math.pow(j, 2) + i == m) {
                count++
            }
        }
    }
    console.log(count);
}
