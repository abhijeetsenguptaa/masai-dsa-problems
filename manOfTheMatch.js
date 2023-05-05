function manOfTheMatch(size,arr){
    let virat = 0;
    let ab = 0;
    let chance = true;
    
    for(let i=0;i<arr.length;i++){
        if(chance){
            ab+=arr[i];
        }else{
            virat+=arr[i];
        }
        
        if(arr[i]==1 || arr[i]==3){
            chance = !chance
        }
        
        if((i+1)%6==0){
            chance = !chance
        }
    }
    if(virat>ab){
        console.log('Virat Kohli')
    }else if(ab>virat){
        console.log('AB de Villiers')
    }else{
        console.log('Tie')
    }
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tc = +input[0];
  
  let line =1;
  
  for(let i=0;i<tc;i++){
      let size = +input[line++];
      let arr = input[line++].trim().split(' ').map(Number);
      
      manOfTheMatch(size,arr)
  }
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}