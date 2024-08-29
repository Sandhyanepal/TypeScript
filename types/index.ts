// @ts-ignore

let sum = (a:number,b: number): number => {
    return a+b
}

console.log(sum(2,4))


let message: string = "Hello"
console.log(message)


let firstName: string = "Sandhya"
let lastName: string = "Nepal"
let fullName = firstName + " " + lastName;
console.log(fullName)

let sentence: string = "Hello people. How are you?"
console.log(sentence.length)


let sentence1: string = "Hello hello hello"
let upperCase = sentence1.toLocaleUpperCase()
console.log(upperCase)
let lowerCase = upperCase.toLocaleLowerCase()
console.log(lowerCase)


let product: string = "Apple"
let price: number = 120
let sentence2 = `The price of ${product} is ${price}.`
console.log(sentence2);


let longText: string = "This is the very very very long text."
let shortText: string = longText.substring(0,10)
console.log(shortText)




let str1: string = "This is the first string."
let str2: string = "This is the second string."
let isEqual = (str1 == str2)
console.log(isEqual)