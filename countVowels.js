// function countVowels(str) {
// const vowels = ["a", "e", "i", "o", "u"];
//   return str
//     .toLowerCase()
//     .split("")
//     .filter((e) => vowels.includes(e)).length;
// }

// Solution
function countVowels(str) {
  return str.split("").filter((x) => "aeiouAEIOU".includes(x)).length;
}

console.log(countVowels("Sonny"));
console.log(countVowels("Palm"));
console.log(countVowels("Community"));
console.log(countVowels("Suite"));
console.log(countVowels("Quote"));
console.log(countVowels("Portrait"));
console.log(countVowels("Steam"));
console.log(countVowels("Tape"));
console.log(countVowels("Nightmare"));
console.log(countVowels("Convention"));
