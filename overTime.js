// function overTime(s, e, r, m) {
//   if (s < 17 && e > 17) {
//     let regular = 17 - s;
//     let overtime = e - 17;

//     return `$${(regular * r + overtime * r * m).toFixed(2)}`;
//   } else if (s < 17 && e <= 17) {
//     let regular = e - s;

//     return `$${(regular * r).toFixed(2)}`;
//   } else if (s > 17) {
//     let overtime = e - s;

//     return `$${(overtime * r * m).toFixed(2)}`;
//   }
// }

// Solution
const overTime = (arr) =>
  `$` +
  (
    (Math.min(arr[1], 17) - Math.min(arr[0], 17)) * arr[2] +
    (Math.max(arr[1], 17) - Math.max(arr[0], 17)) * arr[2] * arr[3]
  ).toFixed(2);

console.log(overTime([9, 17, 30, 1.5]));
console.log(overTime([9, 18, 40, 2]));
console.log(overTime([13, 20, 32.5, 2]));
console.log(overTime([9, 13, 25, 1.5]));
console.log(overTime([11.5, 19, 40, 1.8]));
console.log(overTime([10, 17, 30, 1.5]));
console.log(overTime([10.5, 17, 32.25, 1.5]));
console.log(overTime([16, 18, 30, 1.8]));
console.log(overTime([18, 20, 32.5, 2]));
console.log(overTime([13.25, 15, 30, 1.5]));
console.log(overTime([13, 21, 38.6, 1.8]));
