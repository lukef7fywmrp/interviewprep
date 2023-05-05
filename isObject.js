// function isObject(input) {
//   return typeof input === "object";
// }

// Actual Solution
const isObject = (v) => v instanceof Object;

console.log(isObject(new Date()));
console.log(isObject("12/12/2011"));
console.log(isObject(null));
console.log(isObject([1, 2, 3]));
console.log(isObject({}));
