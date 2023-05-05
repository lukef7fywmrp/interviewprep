function checkTitle(title) {
  return title.split(" ").every((item) => item[0] === item[0].toUpperCase());
}

// Alternate Solution
const checkTitle = (title) => !/\b[a-z]/.test(title);

console.log(checkTitle("A Mind Boggling Achievement"));
console.log(checkTitle("A Simple Java Script Program!"));
console.log(checkTitle("PAPAFAM is amazing"));
