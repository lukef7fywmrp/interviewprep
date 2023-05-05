// const mirrorArray = (arr) => {
//   return [
//     ...arr,
//     ...arr.filter((item) => arr[arr.length - 1] !== item).reverse(),
//   ];
// };

// Actual Solution 1
const mirrorArray = (arr) => [...arr, ...arr.reverse().slice(1)];

console.log(mirrorArray([1, 2, 3, 4, 5]));
console.log(mirrorArray([0, 2, 4, 6]));
console.log(mirrorArray([1, 2, 2, 3, 3, 4]));
