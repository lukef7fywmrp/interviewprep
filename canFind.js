// function canFind(bigrams, words) {
//   for (let i = 0; i < bigrams.length; i++) {
//     if (!words.some((word) => word.includes(bigrams[i]))) {
//       return false;
//     }
//   }

//   return true;
// }

// Solution
function canFind(bigrams, words) {
  return bigrams.every((x) => words.some((y) => y.includes(x)));
}

console.log(
  canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]),
  true
);

console.log(
  canFind(["bo", "ta", "el", "st", "ca"], ["books", "table", "cap", "hostel"]),
  true
);

console.log(canFind(["la", "te"], ["latte"]), true);

console.log(
  canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]),
  true
);

console.log(
  canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]),
  false
);

console.log(
  canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]),
  false
);

console.log(canFind(["la"], []), false);

console.log(canFind(["la", "at", "te", "ea"], ["latte"]), false);
