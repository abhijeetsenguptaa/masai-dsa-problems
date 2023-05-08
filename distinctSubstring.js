function distinctSubstrings(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let sub = new Set();
        for (let j = i; j < str.length; j++) {
            if (sub.has(str[j])) {
                break;
            }
            sub.add(str[j]
            count++
        }
    }
    console.log(count);
}
