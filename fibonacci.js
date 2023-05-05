// function fibonacci(n) {
//   if (n === 0) return [];

//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     if (i === 0) {
//       arr.push(0);
//     } else if (i === 1) {
//       arr.push(1);
//     } else {
//       arr.push(arr[i - 2] + arr[i - 1]);
//     }
//   }

//   return n ? arr : undefined;
// }

// Actual Solution
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

const fibonacci = (length) =>
  typeof length !== "number"
    ? undefined
    : Array.from({ length }, (_, i) => fib(i));

console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(0));
console.log(fibonacci(7));
console.log(fibonacci());
console.log(fibonacci(17));
console.log(fibonacci(1));
