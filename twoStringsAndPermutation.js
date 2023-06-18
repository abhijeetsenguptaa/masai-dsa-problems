function permutation(str1, str2) {
    let a = str1.split('').sort().join('')
    let b = str2.split('').sort().join('')
    a == b ? console.log("Yes") : console.log("No");
}
