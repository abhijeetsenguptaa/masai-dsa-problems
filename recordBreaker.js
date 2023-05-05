function recordBreaker(n, a) {
    let maxScore = a[0];
    let minScore = a[0];
    let maxBreaks = 0;
    let minBreaks = 0;

    for (let i = 1; i < n; i++) {
        if (a[i] > maxScore) {
            maxScore = a[i];
            maxBreaks++;
        }
        if (a[i] < minScore) {
            minScore = a[i];
            minBreaks++;
        }
    }

    console.log(maxBreaks, minBreaks);
}