function absoluteSum(arr) {
  return arr.reduce((acc, val) => acc + Math.abs(val), 0);
}

console.log(absoluteSum([2, -1, -3, 4, 8]));
console.log(absoluteSum([-1]));
console.log(absoluteSum([-1, -3, -5, -4, -10, 0]));
console.log(absoluteSum([8, 9, 10, 32, 101, -10]));
console.log(absoluteSum([500]));
