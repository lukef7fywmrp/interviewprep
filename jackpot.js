// function jackpot(result) {
//   let count = 0;
//   for (let i = 1; i < result.length; i++) {
//     if (result[i] === result[0]) {
//       count++;
//     }
//   }
//   return count === result.length - 1;
// }

// Actual Solution 1
function jackpot(result) {
  return new Set(result).size === 1;
}

// Actual Solution 2
// function jackpot(result) {
//   return result.every((x) => x === result[0]);
// }

console.log(jackpot(["@", "@", "@", "@"]));
console.log(jackpot(["!", "!", "!", "!"]));
console.log(jackpot(["abc", "abc", "abc", "abc"]));
console.log(jackpot(["PAPAFAM", "PAPAFAM", "PAPAFAM", "PAPAFAM"]));
console.log(jackpot(["SS", "SS", "SS", "SS"]));
console.log(jackpot([":(", ":)", ":|", ":|"]));
console.log(jackpot(["&&", "&", "&&&", "&&&&"]));
console.log(jackpot(["hee", "heh", "heh", "heh"]));
console.log(jackpot(["SS", "SS", "SS", "Ss"]));
console.log(jackpot(["SS", "SS", "Ss", "Ss"]));
