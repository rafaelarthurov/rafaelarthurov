function removeEveryOther(arr){
    for (let i = 1; i < arr.length; i = i+2) {
        arr[i] = "remove";
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "remove") {
            var residue = arr.splice(j, 1);
        } 
    }
    return arr;
}

console.log( removeEveryOther(['Hello', 'Goodbye', 'Hello Again']) ); //    Expected result: ['Hello', 'Hello Again']
console.log( removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ); //        Expected result: [1, 3, 5, 7, 9]
console.log( removeEveryOther([[1, 2]]) ); //                               Expected result: [[1, 2]]
console.log( removeEveryOther([['Goodbye'], {'Great': 'Job'}]) ); //        Expected result: [['Goodbye']]
console.log(removeEveryOther( ["t","x","q","v","z","i","x","f","u","c","9","1","0","r","a","u","c","s","s","h","4","6","6","7","u"] ));
// Expected result: [ 't', 'q', 'z', 'x', 'u', '9', '0', 'a', 'c', 's', '4', '6' ]