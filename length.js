const length = (arr) => arr.flat(Infinity).length;

// Actual Solution 2
// function length(arr) {
//   let count = 0;
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       count += getLength(item);
//     } else {
//       count++;
//     }
//   });

//   return count;
// }

console.log(length([1, [2, 3]]));
console.log(length([1, [2, [3, 4]]]));
console.log(length([1, [2, [3, [4, [5, 6]]]]]));
console.log(length([1, 7, 8]));
console.log(length([2]));
console.log(length([]));
