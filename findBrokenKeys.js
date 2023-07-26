// function findBrokenKeys(str1, str2) {
//   let brokenSet = new Set();
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) {
//       brokenSet.add(str1[i]);
//     }
//   }

//   return [...brokenSet];
// }

// Solution
function findBrokenKeys(str1, str2) {
  return [...new Set(str1.split("").filter((a, index) => a !== str2[index]))];
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"), ["p"]);

console.log(findBrokenKeys("starry night", "starrq light"), ["y", "n"]);

console.log(findBrokenKeys("beethoven", "affthoif5"), ["b", "e", "v", "n"]);

console.log(findBrokenKeys("mozart", "aiwgvx"), ["m", "o", "z", "a", "r", "t"]);

console.log(
  findBrokenKeys("5678", "4678"),
  ["5"],
  "It should work for numbers."
);

console.log(
  findBrokenKeys("!!??$$", "$$!!??"),
  ["!", "?", "$"],
  "It should work for punctuation."
);
