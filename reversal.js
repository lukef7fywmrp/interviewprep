function reversal(n) {
  let arr = [];
  let value = Math.abs(n);
  for (let i = 0; i < value.toString().length; i++) {
    arr.push(Math.abs(n) % 10);
    n = Math.floor(Math.abs(n) / 10);
  }

  return arr.join("");
}

// Solution
// function reversal(n) {
//   return Math.abs(n).toString().split("").reverse().join("");
// }

console.log(reversal(215));
console.log(reversal(122225));
console.log(reversal(215));
console.log(reversal(-215));
console.log(reversal(-2152));
console.log(reversal(-122157));
console.log(reversal(666));
console.log(reversal(999));
