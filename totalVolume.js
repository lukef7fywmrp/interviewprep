// function totalVolume(...boxes) {
//   return boxes.reduce((a, b) => a + b.reduce((c, d) => c * d, 1), 0);
// }

// Actual Solution
const totalVolume = (...boxes) =>
  boxes.reduce((total, [l, w, h]) => total + l * w * h, 0);

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));
console.log(totalVolume([5, 1, 10], [1, 9, 2]));
console.log(totalVolume([1, 1, 5], [3, 3, 1]));
