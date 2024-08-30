// @ts-ignore
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 4));
var message = "Hello";
console.log(message);
var firstName = "Sandhya";
var lastName = "Nepal";
var fullName = firstName + " " + lastName;
console.log(fullName);
var sentence = "Hello people. How are you?";
console.log(sentence.length);
var sentence1 = "Hello hello hello";
var upperCase = sentence1.toLocaleUpperCase();
console.log(upperCase);
var lowerCase = upperCase.toLocaleLowerCase();
console.log(lowerCase);
var product = "Apple";
var price = 120;
var sentence2 = "The price of ".concat(product, " is ").concat(price, ".");
console.log(sentence2);
var longText = "This is the very very very long text.";
var shortText = longText.substring(0, 10);
console.log(shortText);
var str1 = "This is the first string.";
var str2 = "This is the second string.";
var isEqual = (str1 == str2);
console.log(isEqual);
// Type Inference
var message1 = "Hello, TypeScript";
console.log(message1);
var calculateArea = function (l, b) {
    return l * b;
};
console.log(calculateArea(5, 6));
