// const makePlusFunction = (baseNumber) => {
//   return function plusBaseNumber(input) {
//     return input + baseNumber;
//   };
// };

// Actual Solution
const makePlusFunction = (baseNum) => (num) => baseNum + num;

const plusTwo = makePlusFunction(2);
const plusFive = makePlusFunction(5);
const plusSeven = makePlusFunction(7);
const plusTen = makePlusFunction(10);

console.log(plusTwo(0));
console.log(plusTwo(18));
console.log(plusTwo(-1));
console.log(plusFive(0));
console.log(plusFive(12));
console.log(plusFive(-5));
console.log(plusTwo(plusFive(plusSeven(plusTen(1)))));

console.log(makePlusFunction(8)(8));
console.log(makePlusFunction(1)(100));
console.log(makePlusFunction(-100)(0));
console.log(makePlusFunction(0)(0));
