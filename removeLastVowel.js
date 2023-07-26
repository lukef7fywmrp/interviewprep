// Solution
function removeLastVowel(str) {
  return str
    .split(" ")
    .map((s) => {
      let idx = s.lastIndexOf(s.match(/[aeiou]/gi).pop());
      return s.slice(0, idx) + s.slice(++idx, str.length);
    })
    .join(" ");
}

// Alternate Solution
// function removeLastVowel(str) {
//   const lastVowel = /([aeiou])(?!.*[aeiou].*)/i;
//   console.log(lastVowel);
//   const arr = str.split(" ").map((x) => x.replace(lastVowel, ""));
//   return arr.join(" ");
// }

console.log(
  removeLastVowel("Those who dare to fail miserably can achieve greatly."),
  "Thos wh dar t fal miserbly cn achiev gretly."
);

console.log(
  removeLastVowel("Love is a serious mental disease."),
  "Lov s  serios mentl diseas."
);

console.log(
  removeLastVowel("Get busy living or get busy dying."),
  "Gt bsy livng r gt bsy dyng."
);

console.log(
  removeLastVowel(
    "If you want to live a happy life, tie it to a goal, not to people."
  ),
  "f yo wnt t liv  hppy lif, ti t t  gol, nt t peopl."
);
