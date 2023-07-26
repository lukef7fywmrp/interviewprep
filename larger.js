// function larger(num) {
//   if (String(Math.abs(num)).length !== 2)
//     return "Please enter a two-digit number";

//   let swappedNumber = Number(String(num).split("").reverse().join(""));

//   return num > swappedNumber || num === swappedNumber ? true : false;
// }

// Actual Solution
const larger = (num) =>
  Number(num.toString().split("").reverse().join("")) <= num;

console.log(larger(14));
