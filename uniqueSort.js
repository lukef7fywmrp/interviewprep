const uniqueSort = (arr) => [...new Set(arr)].sort((a, b) => a - b);

console.log(
  uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]),

  [1, 2, 3, 4, 5, 8, 10]
);

console.log(
  uniqueSort([1, 2, 5, 4, 7, 7, 7]),

  [1, 2, 4, 5, 7]
);

console.log(
  uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1]),

  [0, 1, 2, 3, 4, 5, 6, 7]
);

console.log(
  uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1]),

  [1, 3, 4, 5, 6, 27, 100]
);

console.log(
  uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]),

  [-87, -9, -4.323827, -3.1415, -3.1414, 8]
);
