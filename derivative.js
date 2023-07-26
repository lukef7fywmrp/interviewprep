// Alternate Solution
// const derivative = (b, m) => {
//   return b * Math.pow(m, b - 1);
// };

// Solution
function derivative(b, m) {
  return b * m ** (b - 1);
}

console.log(derivative(1, 4));
console.log(derivative(3, -2));
console.log(derivative(4, -3));
console.log(derivative(9, -5));
console.log(derivative(1254, 0));
console.log(derivative(-2, 10));
