function nameThatNumber(num) {
  // Your solution goes here. Have fun!
  var NumberName = '';
    if (num >= 90) { NumberName = 'ninety'; num-=90;}
    if (num >= 80) { NumberName = 'eighty'; num-=80;} 
    if (num >= 70) { NumberName = 'seventy'; num-=70;}
    if (num >= 60) { NumberName = 'sixty'; num -=60;}
    if (num >= 50) { NumberName = 'fifty'; num -=50;}
    if (num >= 40) { NumberName = 'forty'; num -=40;}
    if (num >= 30) { NumberName = 'thirty'; num -=30;}
    if (num >= 20) { NumberName = 'twenty'; num -=20;}
    if (num >= 14) { NumberName = 'teen'; num -=10;}
    if (num == 13) { NumberName = 'thirteen'; num -=13;}
    if (num == 12) { NumberName = 'twelve'; num -=12;}
    if (num == 11) { NumberName = 'eleven'; num -=11;}
    if (num == 10) { NumberName = 'ten'; num -=10;}
  
    if (num == 9) { if (NumberName == '') {NumberName = 'nine';}else if (NumberName == 'teen') { NumberName = 'nine'+NumberName;}else {NumberName = NumberName+' nine';}num -=9;}
    if (num == 8) { if (NumberName == '') {NumberName = 'eight';}else if (NumberName == 'teen') {NumberName = 'eigh'+NumberName;}else{NumberName = NumberName+' eight';}num -=8;}
    if (num == 7) { if (NumberName == '') {NumberName = 'seven';}else if (NumberName == 'teen') {NumberName = 'seven'+NumberName;}else{NumberName = NumberName+' seven';}num -=7;}
    if (num == 6) { if (NumberName == '') {NumberName = 'six';}else if (NumberName == 'teen') {NumberName = 'six'+NumberName;}else{NumberName = NumberName+' six';}num -=6;}
    if (num == 5) { if (NumberName == '') {NumberName = 'five';}else if (NumberName == 'teen') {NumberName = 'fif'+NumberName;}else{NumberName = NumberName+' five';}num -=5;}
    if (num == 4) { if (NumberName == '') {NumberName = 'four';}else if (NumberName == 'teen') {NumberName = 'four'+NumberName;} else{NumberName = NumberName+' four';}num -=4;}
    if (num == 3) { if (NumberName == '') {NumberName = 'three';}else{NumberName = NumberName+' three';}num -=3;}
    if (num == 2) { if (NumberName == '') {NumberName = 'two';}else{NumberName = NumberName+' two';}num -=2;}
    if (num == 1) { if (NumberName == '') {NumberName = 'one';}else{NumberName = NumberName+' one';}num -=1;}
    if (num == 0) { if (NumberName == '') {NumberName = 'zero';}}
  
  return NumberName;
}

console.log (nameThatNumber(1), ': one');
console.log (nameThatNumber(0), ': zero');
console.log (nameThatNumber(9), ': nine');
console.log (nameThatNumber(3), ': three');
console.log (nameThatNumber(52), ': fifty two');
console.log (nameThatNumber(21), ': twenty one');
console.log (nameThatNumber(13), ': thirteen');
console.log (nameThatNumber(19), ': nineteen');
console.log (nameThatNumber(70), ': seventy');
console.log (nameThatNumber(14), ': fourteen');
console.log (nameThatNumber(99), ': ninety nine');


