var isEven = function (a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(5));
var isEven1 = function (a) {
    return a % 2 == 0;
};
console.log(isEven1(10));
var isDivisible = function (a) {
    return a % 4 == 0 && a % 8 == 0;
};
console.log(isDivisible(4));
