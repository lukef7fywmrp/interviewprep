// const equal = (a, b, c) => {
//   if (a === b && a === c) {
//     return 3;
//   } else if (a === b || b === c || a === c) {
//     return 2;
//   } else {
//     return 0;
//   }
// };

// Solution
function equal(a, b, c) {
  const size = new Set([a, b, c]).size;
  return size === 3 ? 0 : 4 - size;
}

console.log(equal(2, 3, 4), 0, "All values are differents");

console.log(equal(7, 3, 7), 2, "Two values are equal");

console.log(equal(4, 4, 4), 3, "All 3 values are equal");

console.log(equal(7, 3, 4), 0, "All values are differents");

console.log(equal(3, 3, 6), 2, "Two values are equal");

console.log(equal(1, 1, 1), 3, "All 3 values are equal");

console.log(equal(1, 7, 6), 0, "All values are differents");

console.log(equal(7, 7, 7), 3, "All 3 values are equal");
