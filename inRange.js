// function inRange(n, lower, upper) {
//   if (!Number.isInteger(n)) {
//     return false;
//   }

//   if (n >= lower && n < upper) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Actual Solution
const inRange = (n, lower, upper) =>
  Number.isInteger(n) && lower <= n && upper > n;

console.log(inRange(3, 1, 9));
console.log(inRange(6, 1, 6));
console.log(inRange(4.5, 3, 8));
console.log(inRange(-5, -10, 6));
console.log(inRange(4, 0, 0));
console.log(inRange(10, 9, 11));
console.log(inRange(9, 2, 3));
console.log(inRange(9, 9, 9));
