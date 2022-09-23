function SnellInTheWell (depth){
       
    //your code goes here
    var dayTemp = Math.round(depth / 5);

    if (depth % 5 <= 2) {
        return dayTemp+1;
    }
    else{
        return dayTemp;
    }
}

console.log( SnellInTheWell(42), 'Should be an 8' );
console.log( SnellInTheWell(128), 'Should be a 26' );