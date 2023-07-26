const trace = (arr) => arr.reduce((a, e, i) => a + e[i], 0);

console.log(
  trace([
    [1, 4],

    [4, 1],
  ]),
  2
);

console.log(
  trace([
    [1, 2, 3],

    [4, 5, 6],

    [7, 8, 9],
  ]),
  15
);

console.log(trace([[12345]]), 12345);

console.log(
  trace([
    [1, 0, 1, 0],

    [0, 2, 0, 2],

    [3, 0, 3, 0],

    [0, 4, 0, 4],
  ]),
  10
);

console.log(
  trace([
    [0, 1, 0, 1],

    [2, 0, 2, 0],

    [0, 3, 0, 3],

    [4, 0, 4, 0],
  ]),
  0
);

console.log(
  trace([
    [1, 8, 9, 16],

    [2, 7, 10, 15],

    [3, 6, 11, 14],

    [4, 5, 12, 13],
  ]),
  32
);
