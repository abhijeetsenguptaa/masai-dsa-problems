function threeMaxThreeMin(N,arr){
    arr.sort((a, b) => a - b);
    
    let minValues = [...new Set(arr)].slice(0, 3);
    
    let maxValues = [...new Set(arr)].slice(-3);
    
    if (minValues.length >= 3) {
        console.log(minValues.join(' '));
    } else {
        console.log('Not Possible');
    }
    
    if (maxValues.length >= 3) {
        console.log(maxValues.join(' '));
    } else {
        console.log('Not Possible');
    }
}
