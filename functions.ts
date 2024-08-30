const greet = (name: string, id: number): string => {
    return `Welcome ${name} and your id is ${id}`
}
const value = greet("Sandhya", 1)
console.log(value)


// palindrome
const isPalindrome = (sentence: string): boolean => {
    let mySen = sentence.split('').reverse().join("")
    return sentence === mySen
}
console.log(isPalindrome("12321"))

// calculate average
const calculateAverage = (val: number[]): number => {
    const avg = val.reduce((acc: number, currentVal: number) => acc + currentVal);
    return avg / val.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5]))

// find max number
const maxNum = (arr: number[]): number => {
    return Math.max(...arr);
}
console.log(maxNum([3, 6, 4, 8, 3, 87, 5]))


const maxNum1 = (a: number[]): number => {
    let larger: number = 0;
    a.map((b) => {
        if (b > larger) {
            larger = b;
        }
    })
    return larger;
}
console.log(maxNum1([3, 6, 4, 88, 3, 87, 5]))



// Optional and Default parameter


// optional
const greet1 = (name: string, id?: number): string => {
    if (id) {
        return `Welcome ${name} and your id is ${id}`
    }
    else {
        return `Welcome ${name}.`
    }
}
console.log(greet1("Sandhya"))
console.log(greet1("Sandhya", 1))