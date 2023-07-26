const findNemo = (str) => {
  let index = str.split(" ").findIndex((item) => item === "Nemo");

  return index !== -1 ? `I found Nemo at ${index + 1}` : "I can't find Nemo :(";
};

// Actual Solution 2
findNemo = (a) => {
  b = a.split(" ").indexOf("Nemo") + 1;
  return b ? `I found Nemo at ${b}!` : "I can't find Nemo :(";
};

console.log(findNemo("I am Ne mo Nemo !"));
console.log(findNemo("N e m o is NEMO NeMo Nemo !"));
console.log(findNemo("I am Nemo's dad Nemo senior ."));
console.log(findNemo("Oh, hello !"));
console.log(findNemo("Is it Nemos, Nemona, or Nemoor?"));
