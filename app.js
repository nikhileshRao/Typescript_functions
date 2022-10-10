// Defines a variable as a function
var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    return console.log("result " + num);
};
printResult(add(5, 15));
var combineValues;
combineValues = add;
console.log(combineValues(15, 15));
// defines the return of a function
var result;
result = add;
console.log(result(20, 15));
// callback function
var addAndHandle = function (num1, num2, cb) {
    var addition = num1 + num2;
    cb(addition);
};
addAndHandle(10, 20, function (addition) {
    console.log(addition);
});
