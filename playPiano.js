function playPiano(s) {
    let flag = "yes";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0 || i == 0) {
            if (s[i] == s[i + 1]) {
                flag = "no"
                break
            }
        }
    }
    console.log(flag);
}
