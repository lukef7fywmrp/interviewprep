// const lcm = (n1, n2) => {
//   let max = Math.max(n1, n2);
//   let min = Math.min(n1, n2);

//   let minArr = [];
//   let maxArr = [];

//   let count = 1;
//   while (minArr.some((item) => maxArr.includes(item)) === false) {
//     minArr.push(min * count);
//     maxArr.push(max * count);

//     count++;
//   }

//   return minArr.filter((item) => maxArr.includes(item)).join("");
// };

// Actual Solution
let lcm = (n1, n2) => {
  // Find the smallest and biggest number from both the numbers
  let lar = Math.max(n1, n2);
  let small = Math.min(n1, n2);

  // Loop till you find a number by adding the largest number
  // which is divisible by the smallest number
  let i = lar;
  while (i % small !== 0) {
    i += lar;
  }

  return i;
};

console.log(lcm(9, 18));
console.log(lcm(8, 5));
console.log(lcm(17, 11));
console.log(lcm(17, 5));
console.log(lcm(3, 12));
console.log(lcm(9, 9));
