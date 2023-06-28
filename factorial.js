// function factorial(n) {
//   if (n === 0) return 1;

//   return factorial(n - 1) * n;
// }

// Solution
const factorial = (n) => (n ? n * factorial(--n) : 1);

console.log(factorial(5), 120);

console.log(factorial(3), 6);

console.log(factorial(1), 1);

console.log(factorial(0), 1);
