// Correct but not optimal solution...
// function threeDivisor(n) {
//   let divisor = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       divisor++;
//     }
//   }

//   return divisor === 3;
// }

// Actual solution 1
// function threeDivisor(n) {
//   n = Math.sqrt(n);
//   console.log(n % 1);
//   if (n % 1) return false;
//   if (n < 2) return false;
//   if (n === 2) return true;
//   if (!(n % 2)) return false;
//   for (let i = 3; i <= Math.sqrt(n); i += 2) if (!(n % i)) return false;
//   return true;
// }

// Actual solution 2
function threeDivisor(n) {
  let sqrt = Math.sqrt(n);
  console.log(sqrt);
  for (let i = 2; i < sqrt; i++) if (n % i === 0) return false;
  return Number.isInteger(sqrt) && n > 1;
}

console.log(threeDivisor(5));
