// Alternate Solution
// const shiftLeft = (x, y) => {
//   return x * Math.pow(2, y);
// };

// Solution
const shiftLeft = (x, y) => x * 2 ** y;

console.log(shiftLeft(5, 2));
console.log(shiftLeft(10, 3));
console.log(shiftLeft(-32, 2));
console.log(shiftLeft(-6, 5));
console.log(shiftLeft(12, 4));
console.log(shiftLeft(46, 6));
