
//Function that return the longest word in a sentence
function LongestWord (str) {

    var Word = 0;
    var SplitStr = str.split (' ');

    for (let i = 0; i < SplitStr.length; i++) {
        if (SplitStr[i].length > SplitStr[Word].length) {
            Word = i;
        }
    }
    
    console.log("Longest Word: " + SplitStr[Word].toUpperCase());
    //return SplitStr[Word].toUpperCase();
}

/*
Algorithm:
1) Take the string parameter and convert into Uppercase
2) Split the string by space
3) Save all the values into an array
4) In a loop compare every position with the next one, saving in a single variable the biggest one
5) Return the position of the bigger value on the array
*/


LongestWord("The quick brown fox jumped over the lazy dog");
// Expected Result: JUMPED
LongestWord("May the force be with you");
// Expected Result: FORCE
LongestWord("Google do a barrel roll");
// Expected Result: GOOGLE
LongestWord("What is the average airspeed velocity of an unladen swallow");
// Expected Result: AIRSPEED
LongestWord("What if we try a super-long word such as otorhinolaryngology");
// Expected Result: OTORHINOLARYNGOLOGY






