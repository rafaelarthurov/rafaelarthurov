function spam(number){
    let hueSpam = "";
    for (let i = 0; i < number; i++) {
        hueSpam = hueSpam + "hue";
    }
    return hueSpam;
}


console.log( spam(0) );  // Expected result: ""
console.log( spam(1) );  // Expected result: hue
console.log( spam(6) );  // Expected result: huehuehuehuehuehue
console.log( spam(14) ); // Expected result: huehuehuehuehuehuehuehuehuehuehuehuehuehue