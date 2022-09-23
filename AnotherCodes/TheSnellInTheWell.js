const assert = require('assert');

function SnellInTheWell (depth){
      
    //your code goes here
    var day = 0;

    for (let i = 0; i <= depth; i+=7) {
        if (i>=depth) {
            break;
        }
        day++;
        i-=2;
    }
    return day;
         
}

console.log (SnellInTheWell(42), ': Should be 8');
console.log (SnellInTheWell(128), ': Should be 26');


/*
console.log( assert.equal(SnellInTheWell(42), 8, 'Test Case should be 8') );
console.log( assert.equal(SnellInTheWell(128), 26, 'Test Case should be 26') );
*/

