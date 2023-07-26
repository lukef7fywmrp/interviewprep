// const multiples = (num, length) => {
//   let arr = [];
//   for (let i = 1; i <= length; i++) {
//     arr.push(num * i);
//   }

//   return arr;
// };

// Actual Solution
const multiples = (num, length) => {
  Array.from({ length }, (_, i) => num * (i + 1));
};

console.log(multiples(7, 5));
console.log(multiples(12, 10));
console.log(multiples(17, 7));
console.log(multiples(140, 3));
console.log(multiples(7, 8));
