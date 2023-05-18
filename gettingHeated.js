function gettingHeated(arr){
    let min = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(min<=arr[i]){
            min=arr[i]
        }
    }
    let flag = "No AC"
    if(min>=arr[0]&&min<=arr[1]&&min>=arr[2]){
        flag = "AC"
    }
    console.log(flag)
}
