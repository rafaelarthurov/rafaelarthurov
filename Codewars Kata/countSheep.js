var countSheep = function (num){
    //your code here
    var sheep = " sheep...";
    var sheepcount = "";
    var allsheeps = [];
    var Result = "";
    if (num > 0) {
        for (let index = 1; index < num+1; index++) {
            let text = index.toString();
            sheepcount = text+sheep;
            allsheeps.push(sheepcount);
            Result = Result + allsheeps[index-1];
        }
    } 
    return Result;
  }

console.log( countSheep (0)); // ""
console.log( countSheep (1)); // "1 sheep..."
console.log( countSheep (2)); // "1 sheep...2 sheep..."
console.log( countSheep (3)); // "1 sheep...2 sheep...3 sheep..."