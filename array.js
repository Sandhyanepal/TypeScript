var fruits = ["apple", "banana", "mango", "kiwi"];
var updatedFruits = fruits.push("orange");
console.log(updatedFruits); //it gives length
console.log(fruits); //it gives fruits
var lastFruit = fruits.pop();
console.log(lastFruit);
// iterating over elements
// for loop
for (var i = 0; i < fruits.length; i++) {
    console.log("At index ".concat([i], " there is ").concat(fruits[i], "."));
}
// for of - it gives value
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// for in - it gives index
for (var fruit in fruits) {
    console.log(fruit);
}
// for each - it gives value
fruits.forEach(function (curVal) { return console.log(curVal); });
var numbers = [1, 2, 3, 4, 5, 6];
// Map
var doubleNum = numbers.map(function (curVal) { return curVal * 2; });
console.log(doubleNum);
var square = numbers.map(function (curVal) { return Math.pow(curVal, 2); });
console.log(square);
var numToStr = numbers.map(function (curElm) { return curElm.toString(); });
console.log(numToStr);
var names = ["sandhya", 'sara', 'samriddhi', 'ritu'];
var names1 = names.map(function (eachNames) { return eachNames.toLocaleUpperCase(); });
console.log(names1);
// Filter
var evenNum = numbers.filter(function (curElm) { return curElm % 2 == 0; });
console.log(evenNum);
var greaterNum = numbers.filter(function (curElm) { return curElm > 3; });
console.log(greaterNum);
var name2 = names.filter(function (eachNames) { return eachNames.length > 5; });
console.log(name2);
