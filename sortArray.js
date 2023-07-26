// function sortArray(arr, str) {
//   if (str == "Asc") {
//     return arr.sort((a, b) => a - b);
//   } else if (str == "Des") {
//     return arr.sort((a, b) => b - a);
//   } else {
//     return arr;
//   }
// }

// Actual Solution 1
const sortArray = (arr, str) =>
  str === "Asc"
    ? arr.sort((a, b) => a - b)
    : str == "Des"
    ? arr.sort((a, b) => b - a)
    : arr;

console.log(sortArray([4, 3, 2, 1], "Asc"));
console.log(sortArray([7, 8, 11, 66], "Des"));
console.log(sortArray([1, 2, 3, 4], "None"));
console.log(sortArray([1, 0, 1, 0], "Asc"));
console.log(sortArray([1, 2, 2, 2, 2, 2, 2], "Des"));
