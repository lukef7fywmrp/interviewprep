// function sum(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((a, b) => a + Math.pow(+b, 2), 0);
// }

// function happy(n) {
//   while (true) {
//     if (sum(n) === 1) {
//       return true;
//     } else if (sum(n) === 4) {
//       return false;
//     } else {
//       n = sum(n);
//     }
//   }
// }

// Solution
function happy(n) {
  if (n === 1) return true;
  if (n == 4) return false;
  return happy(
    [...n.toString()].reduce((sum, v) => Math.pow(Number(v), 2) + sum, 0)
  );
}

console.log(happy(100), true);

console.log(happy(101), false);

console.log(happy(102), false);

console.log(happy(103), true);

console.log(happy(104), false);

console.log(happy(105), false);

console.log(happy(106), false);

console.log(happy(107), false);

console.log(happy(108), false);

console.log(happy(109), true);

console.log(happy(110), false);
