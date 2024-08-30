let fruits: string[] = ["apple", "banana", "mango", "kiwi"];

let updatedFruits = fruits.push("orange")
console.log(updatedFruits) //it gives length
console.log(fruits) //it gives fruits

const lastFruit = fruits.pop()
console.log(lastFruit)


// iterating over elements

// for loop
for(let i=0; i<fruits.length; i++){
    console.log(`At index ${[i]} there is ${fruits[i]}.`)
}

// for of - it gives value
for(const fruit of fruits){
    console.log(fruit)
}

// for in - it gives index
for(const fruit in fruits){
    console.log(fruit)
}

// for each - it gives value
fruits.forEach((curVal: string) => console.log(curVal))



let numbers: number[] = [1,2,3,4,5,6]

// Map

const doubleNum: number[] = numbers.map((curVal:number) => curVal*2)
console.log(doubleNum)

const square: number[] = numbers.map((curVal:number) => curVal**2)
console.log(square)

const numToStr: string[] = numbers.map((curElm: number) => curElm.toString())
console.log(numToStr)

const names: string[] = ["sandhya", 'sara', 'samriddhi', 'ritu']

const names1: string[] = names.map((eachNames) => eachNames.toLocaleUpperCase())
console.log(names1)


// Filter
const evenNum: number[] = numbers.filter((curElm: number) => curElm % 2 == 0)
console.log(evenNum)


const greaterNum: number[] = numbers.filter((curElm: number) => curElm > 3)
console.log(greaterNum)

const name2: string[] = names.filter((eachNames) => eachNames.length > 5)
console.log(name2)

//  Given an array of strings, filter out the names that start with the letter "A".