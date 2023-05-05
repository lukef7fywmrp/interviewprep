const sorting = (arr) => {
  return arr.sort((a, b) => a - b);
};

// Actual Solution
// const sorting = (arr) => {
//   return arr.sort((a, b) => (a[0] || a) - (b[0] || b));
// };

console.log(sorting([[3], 4, [2], [5], 1, 6]));
