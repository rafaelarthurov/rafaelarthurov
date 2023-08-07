
//Kata Gravity Flip: Organize two arrays, the first one ordered from minor to major and the second one ordered from major to minor. 

const flip=(d, a)=>{
  //TODO
  var temp = 0;
  console.log(a.length)
  if (d == 'R') {
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
          if (a[j] > a[j + 1]) {
              temp = a[j];
              a[j] = a[j + 1];
              a[j + 1] = temp;
            }
        }      
      }
  }
  if (d == 'L') {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (a[j] < a[j + 1]) {
            temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
          }
      }      
    } 
  }
    
  return a
}

console.log( flip('R', [3, 2, 1, 2]) ); // Expected result: [1, 2, 2, 3]
console.log( flip('R', [1, 4, 5, 3, 5]) ); // Expected result: [1, 3, 4, 5, 5]

console.log( flip('L', [3, 2, 1, 2]) ); // Expected result: [3, 2, 2, 1]
console.log( flip('L', [1, 4, 5, 3, 5]) ); // Expected result: [5, 5, 4, 3, 1]


