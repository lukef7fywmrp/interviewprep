// Solution
// function longestTime(h, m, s) {
//   return h < m / 60 ? (m < s / 60 ? s : m) : h;
// }

// Alternate Solution
function longestTime(h, m, s) {
  let arr = [h * 3600, m * 60, s];
  let max = Math.max(...arr);
  return [h, m, s][arr.indexOf(max)];
}

console.log(longestTime(1, 59, 3598), 1);

console.log(longestTime(2, 300, 15000), 300);

console.log(longestTime(15, 955, 59400), 59400);
