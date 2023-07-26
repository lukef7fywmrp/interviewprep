const isWhole = (arr) =>
  Number.isInteger(arr.reduce((a, c) => a + c, 0) / arr.length);

console.log(isWhole([3, 5, 9]));

console.log(isWhole([1, 1, 1, 1]));

console.log(isWhole([1, 2, 3, 4, 5]));

console.log(isWhole([5, 2, 4]));

console.log(isWhole([11, 22]));

console.log(isWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]));
