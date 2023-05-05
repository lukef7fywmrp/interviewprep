// Actual Solution 1
// function paths(n) {
//   if (n === 1) return n;
//   return n * paths(n - 1);
// }

// Actual Solution 2
const paths = (n) => !n || n * paths(--n);

console.log(paths(1));

// First Iteration = 2 * 1 = 2
// Second Iteration = 3 * 2 = 6
// Third Iteration = 4 * 6 = 24
// Fourth Iteration = 5 * 24 = 120
