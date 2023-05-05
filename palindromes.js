// function palindromes(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
//       count += 1;
//     }
//   }

//   return count;
// }

// Actual Solution
function palindromes(arr) {
  return arr.reduce(
    (acc, e, index) => acc + (e === arr[index + 2] && e != arr[index + 1]),
    0
  );
}

console.log(palindromes([9, 5, 9, 5, 1, 1, 1]));
console.log(palindromes([5, 6, 6, 7, 6, 3, 9]));
console.log(palindromes([4, 4, 4, 9, 9, 9, 9]));
console.log(palindromes([5, 5, 5]));
console.log(palindromes([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
