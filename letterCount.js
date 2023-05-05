// const letterCount = (str1, str2) => {
//   let count = 0;
//   for (let i = 0; i < str2.length; i++) {
//     if (str2.split("")[i] === str1) {
//       count++;
//     }
//   }

//   return count;
// };

// Actual Solution
function letterCount(myChar, str) {
  return [...str].filter((x) => x === myChar).length;
}

console.log(letterCount("n", "sonny"));
console.log(letterCount("b", "big fat bubble"));
console.log(letterCount("c", "Chamber of secrets"));
console.log(letterCount("x", "sonny"));
console.log(letterCount("a", "Adam and Eve bit the apple and found a snake"));
console.log(letterCount("s", "sssssssssssssssssssssssss"));
console.log(letterCount("7", "10795426697"));
