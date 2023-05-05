// function folds(n) {
//   return `${(0.5 * Math.pow(2, n)) / 1000}m`;
// }

// Actual Solution
const folds = (n) => `${2 ** (n - 1) / 1000}m`;

console.log(folds(0));
console.log(folds(1));
console.log(folds(2));
console.log(folds(3));
console.log(folds(4));
console.log(folds(5));
console.log(folds(12));
console.log(folds(13));
console.log(folds(14));
console.log(folds(15));
console.log(folds(16));
console.log(folds(45));
console.log(folds(46));
console.log(folds(49));
console.log(folds(50));
