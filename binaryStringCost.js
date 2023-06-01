function binaryStringCost(str, N, X, Y) {
    let arr = [];
    for (let i = 0; i < N - 1; i++) {
        let sum = "";
        sum += str[i];
        sum += str[i + 1];
        arr.push(sum);
    }
    let tenCount = 0;
    let oneCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "10") {
            tenCount++;
        }
        if (arr[i] == "01") {
            oneCount++;
        }
    }

    console.log(Number(tenCount) * X + Number(oneCount) * Y);
}