
//Function that return the longest word in a sentence
function MayorPalabra (frase) {

    var palabra = 0;
    var frase_div = frase.split (' ');

    for (let i = 0; i < frase_div.length; i++) {
        if (frase_div[i].length > frase_div[palabra].length) {
            palabra = i;
        }
    }
    
    console.log("Palabra mas grande: " + frase_div[palabra].toUpperCase());
    //return frase_div[palabra].toUpperCase();
}

/*
Algorithm:
1) Take the string parameter and convert into Uppercase
2) Split the string by space
3) Save all the values into an array
4) In a loop compare every position with the next one, saving in a single variable the biggest one
5) Return the position of the bigger value on the array
*/


MayorPalabra("The quick brown fox jumped over the lazy dog");
// Expected Result: jumped
MayorPalabra("May the force be with you");
// Expected Result: force
MayorPalabra("Google do a barrel roll");
// Expected Result: Google
MayorPalabra("What is the average airspeed velocity of an unladen swallow");
// Expected Result: airspeed
MayorPalabra("What if we try a super-long word such as otorhinolaryngology");
// Expected Result: otorhinolaryngology






