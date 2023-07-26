// const primeFactorization = (int) => {
//   let arr = [];
//   for (let i = int; i > 1; i++) {
//     if (int % 2 === 0) {
//       arr.push(2);
//       int = int / 2;
//     } else {
//       for (let i = 3; i <= int; i++) {
//         if (int % i === 0) {
//           arr.push(i);
//           int = int / i;
//         }
//       }

//       return arr;
//     }
//   }
// };

// Actual Solution
function primeFactorization(n) {
  let factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}

console.log(primeFactorization(12));
console.log(primeFactorization(60));
console.log(primeFactorization(97));
console.log(primeFactorization(1));
console.log(primeFactorization(100));
console.log(primeFactorization(17));
console.log(primeFactorization(27));
console.log(primeFactorization(29));
