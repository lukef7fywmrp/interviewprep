// function myHouse(step) {
//   if (step === 1) {
//     return 6;
//   }

//   return step === 0 ? 0 : (step - 1) * 5 + 6;
// }

// Actual Solution
function myHouse(step) {
  return step === 0 ? 0 : 5 * step + 1;
}

console.log(myHouse(0));
console.log(myHouse(17));
console.log(myHouse(36));
console.log(myHouse(15));
console.log(myHouse(99));
console.log(myHouse(3));
console.log(myHouse(87));
