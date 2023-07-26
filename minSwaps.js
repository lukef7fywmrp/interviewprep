// Solution
// function minSwaps(s1, s2) {
//   let count = 0;
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       count++;
//     }
//   }
//   return count / 2;
// }

// Alternate Solution
function minSwaps(s1, s2) {
  return s1.split("").filter((char, i) => char !== s2[i]).length / 2;
}

console.log(minSwaps("1001", "1001"));
console.log(minSwaps("1100", "1001"));
console.log(minSwaps("110011", "010111"));
console.log(minSwaps("1100", "0011"));
console.log(minSwaps("110011", "001111"));
console.log(minSwaps("10011001", "01100101"));
console.log(minSwaps("11111000001100", "10110010100110"));
console.log(minSwaps("01100100100111", "10110010100110"));
console.log(minSwaps("11110011001", "01100110111"));
console.log(minSwaps("100110001", "010100110"));
console.log(minSwaps("100101011", "011001101"));
console.log(minSwaps("10011001", "01100110"));
