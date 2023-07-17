// const reverseStr = (s) => [...s].reverse().join("");

// const isPalindrome = (s) => [...s].reverse().join("") === s;

// const minPalindromeSteps = (str) => {
//   if (reverseStr(str) === str) {
//     return 0;
//   }

//   let arr = [];
//   for (let i = 1; i < str.length; i++) {
//     let slicedStr = str.slice(0, str.length - i);
//     if (isPalindrome(str + reverseStr(slicedStr))) {
//       arr.push(reverseStr(slicedStr).length);
//     }
//   }

//   return Math.min(...arr);
// };

// Solution
function minPalindromeSteps(str) {
  let rev = [...str].reverse().join(""),
    i = str.length;
  while (!str.endsWith(rev.slice(0, i))) i--;
  return str.length - i;
}

console.log(minPalindromeSteps("race"), 3);

console.log(minPalindromeSteps("mada"), 1);

console.log(minPalindromeSteps("mirror"), 3);

console.log(minPalindromeSteps("maa"), 1);

console.log(minPalindromeSteps("m"), 0);

console.log(minPalindromeSteps("rad"), 2);

console.log(minPalindromeSteps("madam"), 0);

console.log(minPalindromeSteps("radar"), 0);

console.log(minPalindromeSteps("www"), 0);

console.log(minPalindromeSteps("me"), 1);

console.log(minPalindromeSteps("rorr"), 2);

console.log(minPalindromeSteps("pole"), 3);
