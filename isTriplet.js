// function isTriplet(x, y, z) {
//   let sortedArr = [x, y, z].sort((a, b) => a - b);

//   return Math.hypot(sortedArr[0], sortedArr[1]) === sortedArr[2];
// }

// Alternate Solution
const isTriplet = (...sides) =>
  sides.sort((a, b) => a - b).pop() === Math.hypot(...sides);

console.log(isTriplet(3, 4, 5), true);

console.log(isTriplet(1, 2, 3), false);

console.log(isTriplet(3, 18, 8), false);

console.log(isTriplet(7, 12, 7), false);

console.log(isTriplet(13, 5, 12), true);

console.log(isTriplet(12, 20, 18), false);

console.log(isTriplet(17, 14, 2), false);

console.log(isTriplet(6, 15, 12), false);

console.log(isTriplet(60, 61, 11), true);

console.log(isTriplet(7, 13, 15), false);

console.log(isTriplet(12, 18, 7), false);

console.log(isTriplet(8, 17, 15), true);

console.log(isTriplet(3120, 79, 3121), true);
