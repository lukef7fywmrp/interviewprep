// const findVowels = (item) => {
//   return [
//     ...new Set(
//       item
//         .split("")
//         .filter(
//           (char) =>
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         )
//     ),
//   ];
// };

// function sameVowelGroup(arr) {
//   return arr.filter(
//     (item) => findVowels(item).toString() == findVowels(arr[0]).toString()
//   );
// }

// Solution
function sameVowelGroup(w) {
  var keys = w[0].match(/[aouie]/gi).join("") || [];

  return w.filter((word) =>
    word.match(/[aouie]/gi).every((letter) => keys.indexOf(letter) != -1)
  );
}

console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]));
console.log(sameVowelGroup(["crop", "nomnom", "bolo", "yodeller"]));
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]));
console.log(sameVowelGroup(["toe", "ocelot", "maniac"]));
console.log(sameVowelGroup(["a", "apple", "flat", "map", "shark"]));
console.log(sameVowelGroup(["a", "aa", "ab", "abc", "aaac", "abe"]));
