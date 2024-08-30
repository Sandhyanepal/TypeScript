type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string //method call signature
}

const student1: Student = {
    name: "Sandhya",
    age: 22,
    greet: (country): string => `Hy everyone I am ${student1.name}, I am ${student1.age} years old and I am from ${country}.`
}
const student2: Student = {
    name: "Dev",
    age: 24,
    greet: (country): string => `Hy everyone I am ${student2.name}, I am ${student2.age} years old and I am from ${country}.`
}

const intro = (student1: Student) => {
    const {name, age} = student1;
    return `Hy everyone I am ${name}, I am ${age} years old.`
}

console.log(intro(student1))
console.log(student1.greet("Nepal"))
console.log(student2.greet("India"))