// function legendre(p, n) {
//   if (p > n) return 0;

//   let count = 0;
//   for (let i = 1; p ** i <= n; i++) {
//     count += ~~(n / p ** i);
//   }

//   return count;
// }

// Solution
const legendre = (p, n) => {
  let arr = [];
  for (i = 1; p ** i <= n; i++) {
    arr.push(~~(n / p ** i));
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
};

console.log(legendre(5, 100), 24);

console.log(legendre(2, 128), 127);

console.log(legendre(3, 50), 22);

console.log(legendre(7, 98), 16);

console.log(legendre(11, 500), 49);

console.log(legendre(3, 600), 297);

console.log(legendre(7, 6), 0);

console.log(legendre(3, 1385), 688);

console.log(legendre(5, 4324), 1077);

console.log(legendre(2, 8663), 8655);
