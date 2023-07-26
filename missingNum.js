// function missingNum(arr) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let n;
//   for (let i = 1; i < 11; i++) {
//     if (sortedArr.indexOf(i) === -1) {
//       n = i;
//     }
//   }

//   return n;
// }

// Solution
function missingNum(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return 55 - sum;
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5);

console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10);

console.log(missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]), 1);

console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]), 7);

console.log(missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]), 3);
