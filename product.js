// const product = (a, b) => {
//   return function (c, d) {
//     return function (e, f) {
//       return a * c * e + b * d * f;
//     };
//   };
// };

// Alternate Solution
function product(...a) {
  return (...b) => {
    return (...c) => {
      return c.reduce((s, v, i) => s + v * a[i] * b[i], 0);
    };
  };
}

console.log(product(1, 2)(1, 1)(2, 3));
console.log(product(10, 2)(5, 0)(2, 3));
console.log(product(1, 2)(2, 3)(3, 4));
console.log(product(1, 2)(0, 3)(3, 0));
