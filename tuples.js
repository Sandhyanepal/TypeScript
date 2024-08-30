var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driver's License: ").concat(hasLicense ? "Yes" : "No"));
};
var user3 = ['Sandhya', 22, true];
displayPersonInfo(user3);
var displayProductInfo = function (product) {
    var name = product[0], price = product[1], quantity = product[2];
    console.log("Product: ".concat(name, ", Price: ").concat(price, ", Quantity: ").concat(quantity));
};
var product3 = ["Nose Ring", 200, 2];
displayProductInfo(product3);
var product4 = ["Bracelate", 400, 2];
displayProductInfo(product4);
var displaySubjectAvg = function (val) {
    var avg = val.reduce(function (acc, currentVal) { return acc + currentVal; });
    console.log(avg / val.length);
};
var student3 = [95, 87, 90];
displaySubjectAvg(student3);
var displayWeather = function (weather) {
    var name = weather[0], temperature = weather[1], condition = weather[2];
    console.log("City: ".concat(name, ", Temperature: ").concat(temperature, " degree celsius, Condition: ").concat(condition));
};
var weather = ["Sanepa", 29, "Warm"];
displayWeather(weather);
