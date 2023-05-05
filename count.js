// const count = (int) => {
//   return [...`${Math.abs(int)}`].length;
// };

// Actual Solution
// | 0 has the same effect as Math.floor()
function count(n) {
  return (n / 10) | 0 ? 1 + count(n / 10) : 1;
}

console.log(count(65432291));
console.log(count(4399));
console.log(count(12345));
console.log(count(0));
console.log(count(-429034));
console.log(count(-1));
