var greet = function (name, id) {
    return "Welcome ".concat(name, " and your id is ").concat(id);
};
var value = greet("Sandhya", 1);
console.log(value);
// palindrome
var isPalindrome = function (sentence) {
    var mySen = sentence.split('').reverse().join("");
    return sentence === mySen;
};
console.log(isPalindrome("12321"));
// calculate average
var calculateAverage = function (val) {
    var avg = val.reduce(function (acc, currentVal) { return acc + currentVal; });
    return avg / val.length;
};
console.log(calculateAverage([1, 2, 3, 4, 5]));
// find max number
var maxNum = function (arr) {
    return Math.max.apply(Math, arr);
};
console.log(maxNum([3, 6, 4, 8, 3, 87, 5]));
var maxNum1 = function (a) {
    var larger = 0;
    a.map(function (b) {
        if (b > larger) {
            larger = b;
        }
    });
    return larger;
};
console.log(maxNum1([3, 6, 4, 88, 3, 87, 5]));
