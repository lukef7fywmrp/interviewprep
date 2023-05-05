// function capFront(w) {
//   let caps = w.match(/[A-Z]/g);

//   return `${caps.join("")}${w
//     .split("")
//     .filter((l) => caps.indexOf(l) == -1)
//     .join("")}`;
// }

// Solution
function capFront(s) {
  return s.match(/A-Z/g).join("") + s.match(/a-z/g).join("");
}

console.log(capFront("hApPy"));
console.log(capFront("moveMENT"));
console.log(capFront("aPPlE"));
console.log(capFront("shOrtCAKE"));
