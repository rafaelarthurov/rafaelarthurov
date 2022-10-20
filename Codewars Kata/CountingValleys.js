function countingValleys(s) {
    //here we go again
    
    var stringArray = s.split("");var count = 0;var ValleyFlag = 0;var OffValleyFlag = 0;var valleycount = 0;

    for (let i = 0; i < stringArray.length; i++) {    
        if (stringArray[i] === "U") {count++;} if (stringArray[i] === "D") {count--;}
        if (count < 0) {ValleyFlag = 1;}
        if (ValleyFlag == 1 && count >= 0) {OffValleyFlag = 1;}
        if (ValleyFlag == 1 && OffValleyFlag == 1) {valleycount++;ValleyFlag = 0;OffValleyFlag = 0;}
    }return valleycount;}

  console.log (countingValleys("FUFFDDFDUDFUFUF"), ': Should be 1 Valley');
  console.log (countingValleys("FDDUUUFDFDFFU"), ': Should be 2 Vallies');
  console.log (countingValleys("FDDDUUDUUDUDUUD"), ': Should be 3 Vallies');
 