// function countdownSequences(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] - array[i + 1] === 1) {
//       newArray.push(array[i]);
//     } else if (array[i] === 1 && array[i + 1] > 1) {
//       newArray.push(array[i]);
//     }
//   }

//   return [newArray.length, newArray];
// }

// Actual Solution
function countdownSequences(arr) {
  let countdowns = [],
    seq = [],
    before = 0;

  for (const n of arr) {
    if (before - n !== 1) seq = [];
    seq.push(n);
    if (n === 1) {
      countdowns.push(seq);
      seq = [];
    }
    before = n;
  }
  return [countdowns.length, countdowns];
}

console.log(countdownSequences([5, 4, 3, 2, 1]));
console.log(countdownSequences([2, 5, 4, 3, 2, 1, 2]));
console.log(countdownSequences([4, 3, 2, 5, 4, 3]));
