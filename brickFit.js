// function brickFit(a, b, c, w, h) {
//   const arr = [a, b, c].sort((a, b) => a - b);

//   return arr[0] * arr[1] <= w * h;
// }

// Actual Solution 1 EXTREME
function brickFit(a, b, c, w, h) {
  let s = (a, b) => a - b;
  let brick = [a, b, c].sort(s);
  let hole = [w, h].sort(s);
  return brick[0] <= hole[0] && brick[1] <= hole[1];
}

console.log(brickFit(1, 1, 1, 1, 1));
console.log(brickFit(1, 2, 1, 1, 1));
console.log(brickFit(1, 2, 2, 1, 1));
console.log(brickFit(1, 2, 2, 1, 2));
console.log(brickFit(1, 2, 2, 2, 1));
console.log(brickFit(2, 2, 2, 1, 2));
