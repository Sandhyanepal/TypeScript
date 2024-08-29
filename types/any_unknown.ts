// Any

let num:any = 5;
num = "Sandhya";
num = true
// No error as "Any" closes the type checking


// Unknown

let num1: unknown;
num1 = 5;
num1 = "Sandhya";
num1 = true;

if(typeof num1 === "number"){
    console.log(num1 + 5)
}
else if(typeof num1 === "boolean"){
    console.log(num1)
}
