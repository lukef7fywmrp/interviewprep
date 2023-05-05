// function boxSeq(step) {
//   let count = 0;
//   for (let i = 1; i <= step; i++) {
//     i % 2 === 0 ? (count += -1) : (count += 3);
//   }

//   return count;
// }

// Solution
const boxSeq = (step) => (step % 2 === 0 ? step : step + 2);

console.log(boxSeq(5));
console.log(boxSeq(0));
console.log(boxSeq(6));
console.log(boxSeq(99));
console.log(boxSeq(2));
console.log(boxSeq(1));
