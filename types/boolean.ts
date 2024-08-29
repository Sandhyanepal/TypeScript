// Find even or odd
const isEven = (a: number): boolean => {
    if(a%2 == 0){
        return true
    }
    else{
        return false
    }
}
console.log(isEven(5))


const isEven1 = (a: number): boolean => {
        return a % 2 == 0
}
console.log(isEven1(10))


// Take a number and return true ro false if divisible by both 4 and 8
const isDivisible = (a: number):boolean =>{
    return a % 4 == 0 && a % 8 == 0
}
console.log(isDivisible(4))