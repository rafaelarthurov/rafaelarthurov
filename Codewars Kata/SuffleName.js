function nameShuffler(str){
    const SplittingString = str.split(" ");
    const JoinToAString = SplittingString.reverse();
    let result = JoinToAString.join(" ");
    return result;

  }

console.log( nameShuffler('john McClane') ); //         Expected result: McClane john
console.log( nameShuffler('Arturo Valdez') ); //        Expected result: Valdez Arturo
console.log( nameShuffler('Sael Valdez') ); //          Expected result: Valdez Sael
console.log( nameShuffler('Melissa Disla') ); //        Expected result: Disla Melissa
console.log( nameShuffler('Melissa Disla Abreu') ); //  Expected result: Disla Melissa Abreu