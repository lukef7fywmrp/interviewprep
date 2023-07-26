// const isPalindrome = (str) => {
//   const stringToCompare = str
//     .split(" ")
//     .join("")
//     .replace(/,|!|'/g, "")
//     .toLowerCase();

//   const reversedString = str
//     .split(" ")
//     .join("")
//     .replace(/,|!|'/g, "")
//     .toLowerCase()
//     .split("")
//     .reverse("")
//     .join("");

//   return stringToCompare === reversedString;
// };

// Actual Solution
function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man, a plan, a canal, Panama!"));
console.log(isPalindrome("No 'x' in Nixon"));
console.log(isPalindrome("aa"));
