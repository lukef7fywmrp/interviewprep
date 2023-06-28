// function reverseArr(n) {
//   return n
//     .toString()
//     .split("")
//     .reverse()
//     .map((v) => Number(v));
// }

// Solution
const reverseArr = (n) => [...String(n)].map(Number).reverse();

console.log(reverseArr(1485979), [9, 7, 9, 5, 8, 4, 1]);

console.log(reverseArr(623478), [8, 7, 4, 3, 2, 6]);

console.log(reverseArr(12345), [5, 4, 3, 2, 1]);

console.log(reverseArr(202069), [9, 6, 0, 2, 0, 2]);
