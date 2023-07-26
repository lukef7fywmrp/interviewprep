function indexMultiply(arr) {
  if (arr.length === 0) return 0;

  return arr.reduce((total, value, index) => total + value * index, 0);
}

console.log(indexMultiply([9, 3, 7, -7]));
console.log(indexMultiply([3, 8, 6, -4]));
console.log(indexMultiply([10, -9, -2, 0, 2]));
console.log(indexMultiply([4, 4, 2, 2, -4]));
console.log(indexMultiply([]));
