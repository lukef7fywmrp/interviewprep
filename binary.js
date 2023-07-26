// const binary = (decimal) => {
//   let result = "";
//   if (decimal == 0) result = "0";

//   while (decimal > 0) {
//     result += decimal % 2;
//     decimal = Math.floor(decimal / 2);
//   }
//   return result.split("").reverse().join("");
// };

// Actual Solution
function binary(decimal) {
  return decimal.toString(2);
}

console.log(binary(100));
console.log(binary(1));
console.log(binary(0));
console.log(binary(69));
console.log(binary(1023));
console.log(binary(511));
console.log(binary(666));
console.log(binary(123));
