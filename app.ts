// Defines a variable as a function
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number) => {
  return console.log("result " + num);
};

printResult(add(5, 15));

let combineValues: Function;
combineValues = add;

console.log(combineValues(15, 15));

// defines the return of a function

let result: (a: number, b: number) => number;
result = add;
console.log(result(20, 15));

// callback function

const addAndHandle = (
  num1: number,
  num2: number,
  cb: (num: number) => void
) => {
  const addition = num1 + num2;
  cb(addition);
};

addAndHandle(10, 20, (addition) => {
  console.log(addition);
});
