// function isDisarium(num) {
//   return (
//     num
//       .toString()
//       .split("")
//       .reduce((prev, curr, i) => prev + Math.pow(curr, i + 1), 0) === num
//   );
// }

// Solution
const isDisarium = (n) =>
  [...(n + "")].reduce((a, b, i) => a + (+b) ** (i + 1), 0) === n;

let [numVector] = [[6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598]];

for (let i in numVector) console.log(isDisarium(numVector[i]));
