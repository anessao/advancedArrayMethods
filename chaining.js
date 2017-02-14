// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
var chainingResults = integers.sort(function(a,b){return b-a});
console.log("1) ", chainingResults);



//2. Remove any integers greater than 19.
var chainingResults = integers.sort(function(a,b){return b-a}).filter(function(num){return (num < 19)});
console.log("2) ",chainingResults);



//3. Multiply each remaining number by 1.5 and then subtract 1.
var chainingResults = integers.sort(function(a,b){return b-a}).filter(function(num){return (num < 19)}).map(function(x){return ((x * 1.5) - 1)});
console.log("3) ",chainingResults);



// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.
var chainingResults = integers.sort(function(a,b){return b-a}).filter(function(num){return (num < 19)}).map(function(x){return ((x * 1.5) - 1)}).reduce(function(x, y){return (x + y)});
console.log("4) ",chainingResults);