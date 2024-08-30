var student1 = {
    name: "Sandhya",
    age: 22,
    greet: function (country) { return "Hy everyone I am ".concat(student1.name, ", I am ").concat(student1.age, " years old and I am from ").concat(country, "."); }
};
var student2 = {
    name: "Dev",
    age: 24,
    greet: function (country) { return "Hy everyone I am ".concat(student2.name, ", I am ").concat(student2.age, " years old and I am from ").concat(country, "."); }
};
var intro = function (student1) {
    var name = student1.name, age = student1.age;
    return "Hy everyone I am ".concat(name, ", I am ").concat(age, " years old.");
};
console.log(intro(student1));
console.log(student1.greet("Nepal"));
console.log(student2.greet("India"));
