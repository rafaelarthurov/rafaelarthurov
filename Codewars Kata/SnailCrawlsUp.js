function snail(column, day, night) {
    // your code here
    var count = 1;var CurrentMeters = 0;
    for (;;) {
      CurrentMeters += day;
      if (CurrentMeters >= column) {break;}
      CurrentMeters -= night;
      count +=1;
      }return count;
    }
    
  console.log (snail(3,2,1), ': Should be 2');
  console.log (snail(100,20,5),': Should be 7');
  console.log (snail(10, 3, 2),': Should be 8');
  console.log (snail(10, 3, 1),': Should be 5');
  console.log (snail(42, 7, 2),': Should be 8');
  
