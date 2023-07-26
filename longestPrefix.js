// const longestPrefix = (arr) => {
//   let prefix = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     while (arr[i].indexOf(prefix) !== 0) {
//       prefix = prefix.substring(0, prefix.length - 1);
//     }
//   }
//   return prefix;
// };

// Actual Solution
function longestPrefix(strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let prefix = strs[0];
  console.log("prefix", prefix);

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      console.log("prefix updated", prefix);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

console.log(longestPrefix(["flower", "flow", "flight"]));
// console.log(longestPrefix(["dog", "racecar", "car"]));
// console.log(longestPrefix(["interview", "intersection", "interstate"]));
// console.log(longestPrefix(["hello", "heaven", "heavy"]));
