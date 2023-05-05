// function numOnly(array) {
//   return array.filter((string) => string.match(/\d/));
// }

// Actual Solution 1
// function numOnly(arr) {
//   return arr.filter((item) => {
//     for (char of item) {
//       if (char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58) {
//         return item;
//       }
//     }
//   });
// }

// Actual Solution 2
function numOnly(arr) {
  return arr.filter((x) => /\d/.test(x));
}

console.log(numOnly(["abc", "abc10"]));
console.log(numOnly(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numOnly(["1", "a", " ", "b"]));
console.log(numOnly(["rct", "ABC", "Test", "xYz"]));
console.log(numOnly(["-/>", "10bc", "abc"]));
