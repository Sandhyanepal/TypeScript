// Any
var num = 5;
num = "Sandhya";
num = true;
// No error as "Any" closes the type checking
// Unknown
var num1;
num1 = 5;
num1 = "Sandhya";
num1 = true;
if (typeof num1 === "number") {
    console.log(num1 + 5);
}
else if (typeof num1 === "boolean") {
    console.log(num1);
}
