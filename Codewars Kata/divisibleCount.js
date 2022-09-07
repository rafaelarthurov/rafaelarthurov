function divisibleCount(x, y, k) {
    
    //My first solutions
    /*let Count = 0;
    for (let i = x; i < y; i++) {
        if ( i % k === 0) {
            Count++;
        }; 
    }
    return Count;
    */

    //Internet Formula :(
    return Math.floor(y/k) - Math.floor((x-1)/k); 
    
}

//Explanation:
/*
Parameters -> divisibleCount(x, y, k)
Where:
    x = the lower value of the range of number.
    y = the highest value of the range of number.
    k = the dividend factor. 
Solutions:
In a loop from X to Y, calculate the residue. And count all numbers between the range that residue equals to 0 (zero). 
*/

// Test assertions
console.log( divisibleCount(6,11,2) );  // Expected result: 3
console.log( divisibleCount(1,19,3) );  // Expected result: 6
console.log( divisibleCount(124,136,7) );  // Expected result: 2


 