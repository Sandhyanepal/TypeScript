var person = {
    name: "Sandhya",
    age: 22,
    isStudent: true,
    address: {
        city: "Lalitpur",
        country: "Nepal"
    }
};
console.log(person.name);
console.log(person.address.city);
var product1 = {
    name: "Nose Ring",
    price: 200,
    quantity: 1
};
console.log(product1.name);
console.log(product1.quantity);
var person1 = {
    name: "Rahul",
    age: 24,
    isStudent: false,
    address: "Pune"
};
console.log(person1.name);
var person2 = {
    name: "Dev",
    age: 24,
    isStudent: false,
    address: "Pune"
};
console.log(person2.name);
var product2 = {
    name: "Laptop",
    price: 175000,
    quantity: 2
};
console.log(product2.name);
console.log(product2.price);
var calcTotal = function (product2) {
    return product2.price * product2.quantity;
};
console.log(calcTotal(product2));
