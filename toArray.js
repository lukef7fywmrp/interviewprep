function toArray(num) {
  if (num < 0) return "Please provide a positive integer!";

  return num.toString().split("").map(Number);
}

console.log(toArray(19273));
console.log(toArray(19));
console.log(toArray(0));

// Solution
const toArray = (num) => String(num).split("").map(Number);

// Alternate Solution
function toArray(num) {
  return [...num.toString()].map((s) => Number(s));
}
