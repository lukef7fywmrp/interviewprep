function colorPatternTimes(cols) {
  let squareTime = cols.length * 2;

  //   let switchTime = 0;
  //   for (let i = 0; i < cols.length; i++) {
  //     if (cols[i] !== cols[i + 1]) {
  //       switchTime++;
  //     }
  //   }

  let switchTime = cols.reduce(
    (a, c, i, arr) => (c !== arr[i + 1] ? a + 1 : 0),
    0
  );

  return squareTime + switchTime;
}

console.log(colorPatternTimes(["Yellow", "Green", "Blue"]));

console.log(colorPatternTimes(["Red"]));

console.log(colorPatternTimes(["Yellow", "Green", "Yellow", "Yellow"]));

console.log(colorPatternTimes(["Blue", "Red", "Red"]));

console.log(colorPatternTimes(["Yellow", "Red", "Green"]));

console.log(colorPatternTimes(["Yellow", "Yellow", "Red", "Blue"]));
