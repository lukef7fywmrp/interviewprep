// Solution
const colorPatternTimes = (cols) =>
  cols.length * 2 + cols.slice(1).filter((c, i) => c !== cols[i]).length;

// Alternate Solution
// function colorPatternTimes(cols) {
//   let x = cols.length;
//   let sw = 0;
//   for (i = 0; i < x - 1; i++) {
//     if (cols[i] != cols[i + 1]) sw++;
//   }

//   return x * 2 + sw;
// }

console.log(colorPatternTimes(["Yellow", "Green", "Blue"]));

console.log(colorPatternTimes(["Red"]));

console.log(colorPatternTimes(["Yellow", "Green", "Yellow", "Yellow"]));

console.log(colorPatternTimes(["Blue", "Red", "Red"]));

console.log(colorPatternTimes(["Yellow", "Red", "Green"]));

console.log(colorPatternTimes(["Yellow", "Yellow", "Red", "Blue"]));
