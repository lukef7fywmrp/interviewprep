// function countTrue(array) {
//   if (array.some((item) => typeof item !== "boolean")) {
//     return "Please enter only boolean values";
//   }
//   if (array.length === 0) return 0;

//   return array.filter((item) => item == true).length;
// }

// Actual solution
const countTrue = (x) => x.filter(Boolean).length;

console.log(countTrue([false, false, false, true, true]));
