// function matchLastItem(arr) {
//   return arr.slice(0, arr.length - 1).join("") === arr.pop();
// }

// Solution
function matchLastItem(arr) {
  return arr.pop() === arr.join("");
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLastItem([0, 1, 2, 3, 4, 5, "12345"]));
console.log(matchLastItem(["for", "mi", "da", "bel", "formidable"]));
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));
console.log(matchLastItem([1, 1, 1, "11"]));
