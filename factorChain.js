// function factorChain(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % arr[i - 1]) return false;
//   }
//   return true;
// }

// Solution
const factorChain = (arr) => arr.slice(1).every((num, i) => num % arr[i] === 0);

console.log(factorChain([1, 2, 4, 8, 16, 32]), true);

console.log(factorChain([1, 1, 1, 1, 1, 1]), true);

console.log(factorChain([2, 4, 6, 7, 12]), false);

console.log(factorChain([10, 1]), false);

console.log(factorChain([10, 20, 30, 40]), false);

console.log(factorChain([10, 20, 40]), true);

console.log(factorChain([1, 1, 1, 1, 7, 49]), true);
