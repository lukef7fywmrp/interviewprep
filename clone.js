function clone(arr) {
  arr.push([...arr]);
  return arr;
}

// // Solution
// function clone(arr) {
//   arr.push(arr.slice(0));
//   return arr;
// }

// Alternate Solution
// const clone = (arr) => [...arr, arr];

console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));
console.log(clone([1, 1]));
console.log(clone(["a", "b", "c"]));
console.log(clone([]));
