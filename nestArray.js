// const nestArray = (arr1, arr2) => {
//   let sortedArr1 = arr1.sort((a, b) => a - b);
//   let sortedArr2 = arr2.sort((a, b) => a - b);

//   if (
//     sortedArr1[0] > sortedArr2[0] &&
//     sortedArr1[sortedArr1.length - 1] < sortedArr2[sortedArr2.length - 1]
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Actual Solution
const nestArray = (array1, array2) =>
  Math.min(...array1) > Math.min(...array2) &&
  Math.max(...array1) < Math.max(...array2);

console.log(nestArray([9, 9, 8], [8, 9, 10]));
