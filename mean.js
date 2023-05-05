// function mean(n) {
//   let arr = n.toString().split("");
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += Number(arr[i]);
//   }

//   return total / arr.length;
// }

function mean(n) {
  let arr = n.toString().split("");

  return arr.reduce((prev, curr) => prev + Number(curr), 0) / arr.length;
}

console.log(mean(666));

console.log(mean(80));

console.log(mean(789));

console.log(mean(417));

console.log(mean(1357));

console.log(mean(42));

console.log(mean(12345));
