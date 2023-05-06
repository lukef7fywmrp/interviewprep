// function mean(n) {
//   let arr = n.toString().split("");

//   return arr.reduce((prev, curr) => prev + Number(curr), 0) / arr.length;
// }

// Solution
function mean(num) {
  return [...String(num)].reduce((a, c) => a + +c, 0) / String(num).length;
}

console.log(mean(666));

console.log(mean(80));

console.log(mean(789));

console.log(mean(417));

console.log(mean(1357));

console.log(mean(42));

console.log(mean(12345));
