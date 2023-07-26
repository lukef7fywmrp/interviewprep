// function calculator(number1, operator, number2) {
//   if (operator === "/" && number1 !== 0 && number2 === 0)
//     return "Error: Cannot Divide by 0!";

//   if (operator === "+") return number1 + number2;
//   if (operator === "-") return number1 - number2;
//   if (operator === "/") return number1 / number2;
//   if (operator === "*") return number1 * number2;
// }

// Actual Solution
function calculator(number1, operator, number2) {
  return {
    "+": number1 + number2,
    "-": number1 - number2,
    "*": number1 * number2,
    "/": number2 ? number1 / number2 : "Error: Cannot Divide by 0!",
  }[operator];
}

console.log(calculator(2, "/", 2));
console.log(calculator(10, "-", 7));
console.log(calculator(2, "*", 16));
console.log(calculator(2, "-", 2));
console.log(calculator(15, "+", 26));
console.log(calculator(2, "+", 2));
console.log(calculator(42, "/", 0));
