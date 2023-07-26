// function reverseOdd(str) {
//   return str
//     .split(" ")
//     .map((word) =>
//       word.length % 2 == 0 ? word.split("").reverse().join("") : word
//     )
//     .join(" ");
// }

// Actual Solution
function reverseOdd(str) {
  return str
    .split(" ")
    .map((w) => (w.length % 2 ? [...w].reverse().join("") : w))
    .join(" ");
}

console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
console.log(reverseOdd(""));
console.log(reverseOdd("Bananas"));
console.log(reverseOdd("Even even even even even even even even even"));
console.log(reverseOdd("Odd odd odd odd odd odd odd odd odd"));
