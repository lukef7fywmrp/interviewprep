// function simpleFraction(str) {
//   let numArray = str.split("/").map((str) => Number(str));
//   let smallest = numArray.sort((a, b) => a - b)[0];

//   for (let i = smallest; i > 0; i--) {
//     if (numArray[0] % i === 0 && numArray[1] % i === 0) {
//       return numArray[0] / i + "/" + numArray[1] / i;
//     }
//   }
// }

// Actual Solution
let simpleFraction = (r) => {
  r = r.split("/");
  var t = parseInt(r[0]),
    e = parseInt(r[1]);

  for (let r = 100; r > 0; r--) {
    if (t % r === 0 && e % r === 0) return t / r + "/" + e / r;
  }
};

console.log(simpleFraction("4/31"));
