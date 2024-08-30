const person:{
    name:string;
    age: number;
    isStudent: boolean;
    address: {city: string; country: string}
} = {
    name: "Sandhya",
    age: 22,
    isStudent: true,
    address:{
        city: "Lalitpur",
        country: "Nepal"
    }
}

console.log(person.name)
console.log(person.address.city)


const product1:{
    name: string;
    price: number;
    quantity: number
} = {
    name: "Nose Ring",
    price: 200,
    quantity: 1
}

console.log(product1.name)
console.log(product1.quantity)



// Type Aliases

type people = {
    name: string;
    age: number;
    isStudent: boolean;
    class?: string; //optional property
    address: string
}

const person1: people ={
    name: "Rahul",
    age: 24,
    isStudent: false,
    address: "Pune"
}

console.log(person1.name)

const person2: people ={
    name: "Dev",
    age: 24,
    isStudent: false,
    address: "Pune"
}

console.log(person2.name)


// Q
type products = {
    name: string;
    price: number;
    quantity: number
}

const product2: products = {
    name: "Laptop",
    price: 175000,
    quantity: 2
}
console.log(product2.name)
console.log(product2.price)

const calcTotal = (product2: products) => {
    return product2.price*product2.quantity
}
console.log(calcTotal(product2))