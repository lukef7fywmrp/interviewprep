const jazzify = (arr) => {
  return arr.map((chord) => (chord.endsWith("7") ? chord : chord + "7"));
};

console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["G", "C7"]));
console.log(jazzify([]));
