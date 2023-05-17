function missingVowel(N, str) {
    let result = "";
    let vowels = "aeiou";

    for (let i = 0; i < vowels.length; i++) {
        if (!str.includes(vowels[i])) {
            result += vowels[i]
        }
    }

    result == "" ? console.log('-1') : console.log(result)
}
