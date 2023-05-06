// function decimator(str) {
//   let charsToRemove = Math.ceil(str.length * (1 / 10));

//   return str.substring(0, str.length - charsToRemove);
// }

// Solution
decimator = (s) => s.slice(0, s.length * 0.9);

console.log(decimator("1234567890"));

console.log(decimator("1234567890AB"));

console.log(decimator("123"));

console.log(decimator("123456789012345678901"));

console.log(decimator("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));

console.log(decimator("A"));

console.log(decimator(""));
