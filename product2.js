// Actual Solution
function product2(...args) {
  const prodDigits = (digs) => {
    return digs.reduce((accum, val) => accum * val, 1);
  };
  let sum = args.reduce((accum, val) => accum + val, 0);

  while (sum.toString().length > 1) {
    sum = prodDigits(sum.toString().split(""));
  }

  return sum;
}

console.log(product2(8, 16, 89, 3));
console.log(product2(16, 28));
console.log(product2(9));
console.log(product2(26, 497, 62, 841));
console.log(product2(0));
console.log(product2(17737, 98723, 2));
console.log(product2(123, -99));
console.log(product2(9, 8));
console.log(product2(167, 167, 167, 167, 167, 3));
console.log(product2(111111111));
console.log(product2(98526, 54, 863, 156489, 45, 6156));
console.log(product2(999, 999));
console.log(product2(1, 2, 3, 4, 5, 6));
console.log(product2(999, 222));
console.log(product2(8618, -2));
