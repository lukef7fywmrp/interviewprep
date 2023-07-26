// function isSuperior(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > arr2[i]) {
//       return true;
//     }
//   }
//   return false;
// }

const isSuperior = (arr1, arr2) => arr1 > arr2;

console.log(isSuperior([1, 2, 3, 4], [1, 2, 3, 3]));
console.log(isSuperior(['a', 'b', 'c'], ['a', 'd', 'c']));
console.log(isSuperior([true, 10, 'zebra'], [true, 10, 'zebra']));
console.log(isSuperior([true, 10, 'zebra'], [true, 10, 'ant']));
console.log(isSuperior([true, true, false, true], [true, true, true, true]));
console.log(isSuperior([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1]));
console.log(isSuperior(['llama', 'alligator'], ['llama', 'buffalo']));
console.log(isSuperior([1, 2, 3, 4], [1, 2, 4, 4]));
