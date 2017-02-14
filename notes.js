// var fruits = ["apple", "banana", "cherry"];
// function outputFruitOld (array) {
// 	for (i = 0;  i < array.length; i++) {
// 		console.log(array[i]);
// 	}
// }
// outputFruitOld(fruits);

//a function that consoles every item in an array above... rewritten as forEach

// function outputFruit (element, index) {
// 	console.log(element);
// 	console.log("array[" + index + "]" + element);
// }
// fruits.forEach(outputFruit);

// fruits.forEach(function(fruit){
// 	console.log(fruit);
// });

//Write a function called backwardFruits Old that reverses the letters in each word in the fruits array.

// function backwardFruitsOld(array) {
// 	var backwardFruit = [];
// 	for (i = 0; i < array.length; i++){
// 		backwardFruit.push(array[i].split('').reverse().join(''));
// 	}
// 	console.log(backwardFruit);
// }

// backwardFruitsOld(fruits);

//Rewrite the above method using the map array method

// var backwardFruit = fruits.map(function(fruits){
// 	return fruits.split('').reverse().join(''); //in order to use .map you must return a value. It will return to an array (your named variable in the beginnig)
// });
// console.log(backwardFruit);

//Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

// function fiveLettersOnlyOld (array) {
// 	var filteredFruits = [];
// 	for (var i = 0; i < array.length; i++) {
// 		if(array[i].length === 5) {
// 			filteredFruits.push(array[i]);
// 		}
// 	}
// 	console.log(filteredFruits)
// }

// fiveLettersOnlyOld(fruits);

//Rewrite using filter array method

// function filterIt (cat) {
// 	if (cat.length === 5) {
// 		return cat;
// 	}
// }

// var filteredFruits = fruits.filter(filterIt);
// console.log(filteredFruits);

// Write a function that returns the sum of an array
// var numbers = [0, 1, 2, 3, 4];
// function addzOld(array){
// 	var sum = 0;
// 	for (var i = 0; i < array.length; i++) {
// 		sum = sum + array[i];
// 	}
// 	console.log(sum);
// }
// addzOld(numbers);

// Rewrite using reduce array method

// var sum = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index){
// 	console.log("current index " + index);
// 	return previousValue + currentValue;
// });
// console.log(sum);




















