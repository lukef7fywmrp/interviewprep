// function hackerSpeak(str) {
//   return str
//     .split(" ")
//     .filter((word) => {
//       if (word.includes("a")) {
//         return word.replace("a", "4");
//       } else if (word.includes("e")) {
//         return word.replace("e", "3");
//       } else if (word.includes("i")) {
//         return word.replace("i", "1");
//       } else if (word.includes("o")) {
//         return word.replace("o", "0");
//       } else if (word.includes("s")) {
//         return word.replace("s", "5");
//       } else {
//         return word;
//       }
//     })
//     .join(" ");
// }

// Actual Solution 1
function hackerSpeak(str) {
  var chars = { a: "4", e: "3", i: "1", o: "0", s: "5" };
  str = str.replace(/[aeios]/g, (letter) => chars[letter]);

  return str;
}

// Actual Solution 2
console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("become a coder"));
console.log(hackerSpeak("hi there"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("keep on practicing"));
