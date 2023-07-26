// Actual Solution
function myChange(change, amountDue) {
  let sum =
    change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;

  return sum >= amountDue;
}

console.log(myChange([2, 100, 0, 0], 14.11));
console.log(myChange([0, 0, 20, 5], 0.75));
console.log(myChange([30, 40, 20, 5], 12.55));
console.log(myChange([10, 0, 0, 50], 13.85));
console.log(myChange([1, 0, 5, 219], 19.99));
